import { mount } from "@vue/test-utils";
import PostsList from "../PostsList.vue";
import axios from "axios";
import { describe, it, expect, vi } from "vitest";

// Mock de axios
vi.mock("axios");

describe("PostsList.vue", () => {
  it("fetches and renders posts from the API", async () => {
    const mockPosts = [
      { id: 1, title: "First Post", content: "This is the first post." },
      { id: 2, title: "Second Post", content: "This is the second post." },
    ];

    // Simulamos la respuesta de axios
    axios.get.mockResolvedValue({ data: mockPosts });

    const wrapper = mount(PostsList);

    // Esperamos a que se complete la llamada a la API
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain("First Post");
    expect(wrapper.text()).toContain("Second Post");
  });
});
