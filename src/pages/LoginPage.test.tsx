import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginPage } from "./LoginPage";
import { MemoryRouter } from "react-router-dom";

const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

afterEach(() => {
  alertMock.mockClear();
  cleanup();
  localStorage.clear();
});

// --- Pruebas ---
describe("Componente LoginPage", () => {
  it("debería mostrar una alerta de error si el login es incorrecto", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    await user.type(
      screen.getByLabelText("Correo electrónico"),
      "correo-falso@mail.com"
    );
    await user.type(screen.getByLabelText("Contraseña"), "contraseña-falsa");

    await user.click(screen.getByRole("button", { name: "Iniciar Sesión" }));

    expect(alertMock).toHaveBeenCalledWith("Email o contraseña incorrecta");
  });

  it("debería mostrar una alerta de éxito si el login es correcto", async () => {
    const user = userEvent.setup();
    // Configurar el localStorage con un usuario válido
    localStorage.setItem("duoc@duocuc.cl", "1234");
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );

    await user.type(
      screen.getByLabelText("Correo electrónico"),
      "duoc@duocuc.cl"
    );
    await user.type(screen.getByLabelText("Contraseña"), "1234");
    await user.click(screen.getByRole("button", { name: "Iniciar Sesión" }));

    expect(alertMock).toHaveBeenCalledWith("Login exitoso!");
  });
});
