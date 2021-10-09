const DATA = [
  {
    id: 1,
    name: "Karisa",
    address: "549 Declaration Park",
    phone: "494-345-0958",
    birthday: "11/4/2020",
  },
  {
    id: 2,
    name: "Naoma",
    address: "9 High Crossing Place",
    phone: "363-667-8273",
    birthday: "3/10/2021",
  },
  {
    id: 3,
    name: "Falito",
    address: "65786 Ridgeview Pass",
    phone: "705-189-8668",
    birthday: "1/31/2021",
  },
  {
    id: 4,
    name: "Philippa",
    address: "9 Clarendon Center",
    phone: "573-852-4133",
    birthday: "5/22/2021",
  },
  {
    id: 5,
    name: "Barnebas",
    address: "8916 Schiller Street",
    phone: "264-127-4635",
    birthday: "4/2/2021",
  },
  {
    id: 6,
    name: "Stacee",
    address: "736 Nobel Park",
    phone: "469-959-3236",
    birthday: "1/13/2021",
  },
  {
    id: 7,
    name: "Jacklin",
    address: "0486 Petterle Street",
    phone: "780-250-5492",
    birthday: "8/2/2021",
  },
  {
    id: 8,
    name: "Tatum",
    address: "77 Browning Park",
    phone: "520-914-3681",
    birthday: "11/12/2020",
  },
  {
    id: 9,
    name: "Ernestus",
    address: "82776 Starling Avenue",
    phone: "830-280-2953",
    birthday: "11/30/2020",
  },
  {
    id: 10,
    name: "Julissa",
    address: "7149 Brentwood Plaza",
    phone: "268-254-9350",
    birthday: "7/3/2021",
  },
];

const users = DATA.map(
  (user) => `<li id="user-id-${user.id}" tabindex="0">${user.name}</li>`
);
const usersString = users.join("");

document.querySelector("#users > ul").innerHTML = usersString;

const getUserFromId = (userId) => {
  const user = DATA.find((user) => user.id === userId);
  return user;
};

const stack = [];
document.querySelector("#users > ul").addEventListener("focusin", (event) => {
  const userId = +event.target.id.split("-")[2];
  const selectedUser = getUserFromId(userId);

  const clicked = event.target;
  if (stack.length > 0) {
    document.getElementById(stack[0]).classList.remove("active");
    stack.shift();
  }
  stack.push(event.target.id);
  event.target.classList.add("active");

  setTimeout(() => {
    document.querySelector("#preview > div.info").style = "opacity: 1;";
  }, 750);

  document.querySelector("#preview > span").style = "opacity: 0;";
  document.querySelector("#preview > div.info").style = "opacity: 0;";

  setTimeout(() => {
    for (const prop in selectedUser) {
      if (prop !== "id") {
        document.querySelector(
          `#preview > div.info > label[for="${prop}"]`
        ).innerText = prop.toUpperCase();
        document.querySelector(`#preview > div.info > div.${prop}`).innerText =
          selectedUser[prop];
      }
    }
  }, 500);
});
