import { describe, expect, it } from "vitest";

import { slugify } from "../CORE/slugify.js";
describe("slugify", () => {
  it("For Empty String", () => {
    expect(slugify("")).toBe("");
  });

  it("For Single Word with Special Characters", () => {
    expect(slugify("@Hello$")).toBe("hello");
  });

  it("For Multiple Words with Special Characters", () => {
    expect(slugify("!@Hello World#$")).toBe("hello-world");
  });

  it("For CamelCasing Words with Special Characters", () => {
    expect(slugify("hello@World$")).toBe("hello-world");
  });

  it("For Single Word with Consecutive Special Characters", () => {
    expect(slugify("@@Hello$$")).toBe("hello");
  });

  it("For Multiple Words with Consecutive Special Characters", () => {
    expect(slugify("!@@Hello##World$$")).toBe("hello-world");
  });

  it("For CamelCasing Words with Consecutive Special Characters", () => {
    expect(slugify("hello@@World$$")).toBe("hello-world");
  });

  it("For Single Word with Leading and Trailing Spaces", () => {
    expect(slugify("   Hello   ")).toBe("hello");
  });

  it("For Multiple Words with Leading and Trailing Spaces", () => {
    expect(slugify("   Hello   World   ")).toBe("hello-world");
  });

  it("For CamelCasing Words with Leading and Trailing Spaces", () => {
    expect(slugify("   hello   World   ")).toBe("hello-world");
  });

  it("For Special Characters Only", () => {
    expect(slugify("@#$%^&*()")).toBe("");
  });

  it("For Special Characters with Spaces", () => {
    expect(slugify("!@# Hello $%^ World &*()")).toBe("hello-world");
  });
});
