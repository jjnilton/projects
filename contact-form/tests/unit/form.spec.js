import { mount } from "@vue/test-utils";
import { doesNotReject } from "assert";
import Form from "../../src/components/Form.vue";
global.fetch = require("jest-fetch-mock");

describe("Form.vue", () => {
  it("submit form with all inputs empty", async () => {
    const wrapper = mount(Form);
    const nameInput = wrapper.find("#name");
    const emailInput = wrapper.find("#email");
    const subjectInput = wrapper.find("#subject");
    const messageInput = wrapper.find("#message");
    const form = wrapper.find("form");

    await form.trigger("submit");

    expect(nameInput.classes()).toContain("invalid");
    expect(emailInput.classes()).toContain("invalid");
    expect(subjectInput.classes()).not.toContain("invalid");
    expect(messageInput.classes()).toContain("invalid");
  });

  it("submit form with all invalid inputs", async () => {
    const wrapper = mount(Form);
    const nameInput = wrapper.find("#name");
    const emailInput = wrapper.find("#email");
    const subjectInput = wrapper.find("#subject");
    const messageInput = wrapper.find("#message");
    const form = wrapper.find("form");

    wrapper.setData({
      nameValue: "test",
      emailValue: "test",
      subjectValue: "t".repeat(101),
      messageValue: "t".repeat(501),
    });

    await form.trigger("submit");

    expect(nameInput.classes()).toContain("invalid");
    expect(emailInput.classes()).toContain("invalid");
    expect(subjectInput.classes()).toContain("invalid");
    expect(messageInput.classes()).toContain("invalid");
  });

  it("submit form with multiple invalid inputs", async () => {
    const wrapper = mount(Form);
    const nameInput = wrapper.find("#name");
    const emailInput = wrapper.find("#email");
    const subjectInput = wrapper.find("#subject");
    const messageInput = wrapper.find("#message");
    const form = wrapper.find("form");

    wrapper.setData({
      nameValue: "test",
      emailValue: "test$test",
      subjectValue: "t".repeat(100),
      messageValue: "",
    });

    await form.trigger("submit");

    expect(nameInput.classes()).toContain("invalid");
    expect(emailInput.classes()).toContain("invalid");
    expect(subjectInput.classes()).toContain("valid");
    expect(messageInput.classes()).toContain("invalid");
  });

  it("submit form with one invalid input", async () => {
    const wrapper = mount(Form);
    const nameInput = wrapper.find("#name");
    const emailInput = wrapper.find("#email");
    const subjectInput = wrapper.find("#subject");
    const messageInput = wrapper.find("#message");
    const form = wrapper.find("form");

    wrapper.setData({
      nameValue: "test",
      emailValue: "test@test.com",
      subjectValue: "t".repeat(100),
      messageValue: "t".repeat(500),
    });

    await form.trigger("submit");

    expect(nameInput.classes()).toContain("invalid");
    expect(emailInput.classes()).toContain("valid");
    expect(subjectInput.classes()).toContain("valid");
    expect(messageInput.classes()).toContain("valid");
  });

  it("submit form with all inputs valid", async () => {
    const wrapper = mount(Form);
    const nameInput = wrapper.find("#name");
    const emailInput = wrapper.find("#email");
    const subjectInput = wrapper.find("#subject");
    const messageInput = wrapper.find("#message");
    const form = wrapper.find("form");

    wrapper.setData({
      nameValue: "tester",
      emailValue: "test@test.com",
      subjectValue: "t".repeat(100),
      messageValue: "t".repeat(500),
    });

    await form.trigger("submit");

    expect(nameInput.classes()).toContain("valid");
    expect(emailInput.classes()).toContain("valid");
    expect(subjectInput.classes()).toContain("valid");
    expect(messageInput.classes()).toContain("valid");
  });

  it("show error message on request error", async () => {
    const wrapper = mount(Form);

    wrapper.setData({
      success: false,
      requestError: true
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find("#success").exists()).toBe(false);
    expect(wrapper.get("#request-error").exists()).toBe(true);
  });

  it("show success message on form sent", async () => {
    const wrapper = mount(Form);

    wrapper.setData({
      success: true,
      requestError: false
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.find("#success").exists()).toBe(true);
    expect(wrapper.find("#request-error").exists()).toBe(false);
  });
});
