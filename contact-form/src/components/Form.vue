<template>
  <div class="contact">
    <form @submit.prevent="handleSubmit">
      <label for="name">Name</label
      ><input
        id="name"
        name="name"
        class="default"
        v-bind:class="{
          invalid: nameError,
          valid: !nameError && isNameValid,
        }"
        type="text"
        v-model="nameValue"
        placeholder="Your name"
        @blur="handleNameBlur"
        @focus="handleNameFocus"
        :disabled="loading"
      />
      <div v-if="this.nameError" class="error">
        Invalid name. Name should be between 5 and 50 characters.
      </div>
      <label for="email">E-mail</label
      ><input
        id="email"
        v-bind:class="{
          invalid: emailError,
          valid: !emailError && isEmailValid,
        }"
        name="email"
        type="email"
        v-model="emailValue"
        placeholder="your@email.com"
        @blur="handleEmailBlur"
        @focus="handleEmailFocus"
        :disabled="loading"
      />
      <div v-if="this.emailError" class="error">
        Invalid e-mail. Valid example: "name@email.com".
      </div>
      <label for="subject">Subject</label
      ><input
        id="subject"
        v-bind:class="{
          invalid: subjectError,
          valid: !subjectError && isSubjectValid && subjectHasBeenFocused,
        }"
        name="subject"
        type="text"
        v-model="subjectValue"
        placeholder="Subject"
        @blur="handleSubjectBlur"
        @focus="handleSubjectFocus"
        :disabled="loading"
      />
      <div v-if="this.subjectError" class="error">
        Invalid subject. Can't have more than 100 characters.
      </div>
      <label for="message">Message</label
      ><textarea
        name="message"
        id="message"
        v-bind:class="{
          invalid: messageError,
          valid: !messageError && isMessageValid,
        }"
        cols="30"
        rows="10"
        v-model="messageValue"
        placeholder="Your message"
        @blur="handleMessageBlur"
        @focus="handleMessageFocus"
        :disabled="loading"
      ></textarea>
      <div v-if="this.messageError" class="error">
        Invalid message. Message can't be empty.
      </div>
      <button type="submit" :disabled="loading">Send</button>
    </form>
    <div v-if="this.loading">Sending...</div>
    <div id="success" v-if="this.success" class="success">
      Your message was sent with success!
    </div>
    <div id="request-error" v-if="this.requestError" class="error">
      Something went wrong, please try submitting again later.
    </div>
  </div>
</template>

<script>
console.log()
export default {
  name: "Form",
  data() {
    return {
      nameValue: "",
      emailValue: "",
      subjectValue: "",
      messageValue: "",
      nameError: false,
      emailError: false,
      subjectError: false,
      messageError: false,
      isNameValid: false,
      isEmailValid: false,
      isSubjectValid: true,
      isMessageValid: false,
      success: false,
      requestError: false,
      loading: false,
      subjectHasBeenFocused: false,
      apiUrl: process.env.VUE_APP_API_URL,
    };
  },

  methods: {
    setValidInput(type) {
      if (type === "name") {
        this.isValidName = true;
      }
    },

    handleNameFocus() {
      this.nameError = false;
      this.isNameValid = false;
      this.requestError = false;
    },
    handleEmailFocus() {
      this.emailError = false;
      this.isEmailValid = false;
      this.requestError = false;
    },

    handleSubjectFocus() {
      this.subjectError = false;
      this.isSubjectValid = false;
      this.requestError = false;
      this.subjectHasBeenFocused = true;
    },
    handleMessageFocus() {
      this.messageError = false;
      this.isMessageValid = false;
      this.requestError = false;
    },

    validateName(name) {
      if (name.match(/^[a-zA-Z ]{5,50}$/g)) {
        this.nameError = false;
        this.isNameValid = true;
      } else {
        if (name.length > 0) {
          this.nameError = true;
          this.isNameValid = false;
        }
      }
    },

    handleNameBlur(event) {
      this.validateName(event.target.value);
    },

    validateEmail(email) {
      if (email.match(/^[\w+]+@\w+(\.\w+)*$/g)) {
        // Not compilant to RFC822
        this.emailError = false;
        this.isEmailValid = true;
      } else {
        if (email.length > 0) {
          this.emailError = true;
          this.isEmailValid = false;
        }
      }
    },

    handleEmailBlur(event) {
      this.validateEmail(event.target.value);
    },

    validateSubject(subject) {
      this.subjectHasBeenFocused = true;
      if (subject.length <= 100) {
        this.subjectError = false;
        this.isSubjectValid = true;
      } else {
        this.subjectError = true;
        this.isSubjectValid = false;
      }
    },

    handleSubjectBlur(event) {
      this.validateSubject(event.target.value);
    },

    validateMessage(message) {
      if (message.length > 0 && message.length <= 500) {
        this.messageError = false;
        this.isMessageValid = true;
      } else {
        if (message.length > 0) {
          this.messageError = true;
          this.isMessageValid = false;
        }
      }
    },

    handleMessageBlur(event) {
      this.validateMessage(event.target.value);
    },

    handleSubmit() {
      this.requestError = false;

      this.validateName(this.nameValue);
      this.validateEmail(this.emailValue);
      this.validateSubject(this.subjectValue);
      this.validateMessage(this.messageValue);

      if (
        this.isNameValid &&
        this.isEmailValid &&
        this.isSubjectValid &&
        this.isMessageValid
      ) {
        this.loading = true;
        fetch(this.apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: this.nameValue,
            email: this.emailValue,
            subject: this.subjectValue,
            message: this.messageValue,
          }),
        }).then((res) => {
          if (res.ok) {
            this.success = true;
            this.loading = false;
            this.nameError = false;
            this.subjectError = false;
            this.messageError = false;
            this.nameValue = "";
            this.emailValue = "";
            this.subjectValue = "";
            this.messageValue = "";
          } else {
            this.loading = false;
            this.requestError = true;
          }
        });
      } else {
        if (!this.isNameValid) {
          this.nameError = true;
        }
        if (!this.isEmailValid) {
          this.emailError = true;
        }
        if (!this.isSubjectValid) {
          this.subjectError = true;
        }
        if (!this.isMessageValid) {
          this.messageError = true;
        }
      }
    },
  },
};
</script>

<style scoped>
div.contact {
  max-width: 600px;
  margin: 0 auto;
}
form {
  display: grid;
}
label {
  margin: 3px 0;
  font-size: 0.9em;
}
label[for="name"]::after,
label[for="email"]::after,
label[for="message"]::after {
  content: "*";
  font-size: 1em;
  margin-left: 1px;
  color: rgb(175, 0, 0);
  font-weight: bold;
}
input {
  border: 2px solid #35495e;
  height: 40px;
  margin-bottom: 5px;
  font-size: 1em;
  padding: 0 5px;
}
textarea {
  border: 2px solid #35495e;
  margin-bottom: 5px;
  font-size: 1em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 5px;
}
input:focus,
textarea:focus {
  outline: 2px solid #41b883;
}
button {
  background-color: #41b883;
  color: white;
  border: 2px solid #35495e;
  font-size: 1.5em;
  padding: 5px 20px;
  justify-self: center;
  margin: 10px 0;
  cursor: pointer;
  transition: all 500ms;
}
button:hover {
  background-color: #4ad496;
}
button:disabled {
  background-color: lightgray;
  cursor: wait;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.error {
  background-color: rgb(129, 26, 26);
  color: white;
  padding: 10px;
  font-size: 0.9em;
  margin-bottom: 5px;
}
.success {
  background-color: #0aa861;
  color: white;
  padding: 10px;
  font-size: 0.9em;
  margin-bottom: 5px;
}
.invalid {
  border-color: rgb(129, 26, 26);
  background-color: pink;
}
.valid {
  background-color: #90ffcd;
}
</style>
