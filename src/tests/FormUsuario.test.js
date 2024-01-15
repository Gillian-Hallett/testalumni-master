import FormUsuario from "../components/FormUsuario";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('FormUsuario componente', () => {

    let box;
    let button;
    let h2;

    beforeEach(() => {
        render(<FormUsuario />); 
        box = screen.getByLabelText('Nombre');
        button = screen.getByRole( 'button', { name: 'Submit' } );
        h2 = screen.getByRole( 'heading', { level:2 } );
    });
    
    test('comprobar que el campo de texto se encuentra en el documento', () => {
        expect(box).toBeInTheDocument();
    });

    test('comprobar que el boton se encuentra en el documento', () => {
        expect(button).toBeInTheDocument();
    });

    test('comprobar que el h2 se encuentra en el documento', () => {
        expect(h2).toBeInTheDocument();
    });

    test(' comprobar que el usuario escribe un nombre y luego pica en el boton se borra su nombre del campo', async () => {

        const user = userEvent.setup();
        await user.type(box, 'no');
        await user.click(button);
        expect(box.value).toBe('');
    
    });
});