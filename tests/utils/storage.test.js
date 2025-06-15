// tests/utils/storage.test.js
import { describe, it, expect, beforeEach } from "vitest";
import { getUsername, saveUser } from "../../js/utils/storage.js";

// Mock localStorage for testing
const localStorageMock = {
  store: {},
  getItem: function (key) {
    return this.store[key] || null;
  },
  setItem: function (key, value) {
    this.store[key] = value;
  },
  removeItem: function (key) {
    delete this.store[key];
  },
  clear: function () {
    this.store = {};
  },
};

// Replace global localStorage with our mock
Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("getUsername", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
  });

  it("returns the name from the user object in storage", () => {
    // Save a user object to storage
    const testUser = { name: "John Doe", email: "john@example.com" };
    saveUser(testUser);

    // Test that getUserName returns the name
    expect(getUsername()).toBe("John Doe");
  });

  it("returns null when no user exists in storage", () => {
    // Ensure localStorage is empty
    localStorage.clear();

    // Test that getUserName returns null
    expect(getUsername()).toBe(null);
  });
});
