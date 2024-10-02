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

    // Montamos el componente
    const wrapper = mount(PostsList);

    // Esperamos a que se ejecute el método fetchPosts y termine la llamada axios
    await wrapper.vm.fetchPosts();

    // Esperamos que el DOM se actualice después de la llamada asíncrona
    await wrapper.vm.$nextTick();

    // Verificamos que los posts simulados se renderizan en el DOM
    expect(wrapper.text()).toContain("First Post");
    expect(wrapper.text()).toContain("Second Post");
  });
});
