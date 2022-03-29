import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { Router, useParams } from "react-router-dom";
import selectEvent from "react-select-event";
import { ToastContainer } from "react-toastify";
import history from "util/history";
import Form from "../Form"
import { server } from "./fixtures";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn()
}));

describe('Product form create tests', () => {

    beforeEach(() => {
        (useParams as jest.Mock).mockReturnValue({
            productId: 'create'
        });
    });

    test('should show toast and redirect when submitting the form correctly', async () => {

        render(
            <Router history={history}>
                <ToastContainer />
                <Form />
            </Router>
        );

        const nameInput = screen.getByTestId("name");
        const priceInput = screen.getByTestId("price");
        const imgUrlInput = screen.getByTestId("imgUrl");
        const descriptionInput = screen.getByTestId("description");
        const categoriesInput = screen.getByLabelText("Categories");
        const submitButton = screen.getByRole('button', { name: /save/i });

        //Simulating select with SelectEvent:
        await selectEvent.select(categoriesInput, ['Electronics', 'Computers']);

        //Simulating typing with UserEvent:
        userEvent.type(nameInput, 'Computer');
        userEvent.type(priceInput, '1800.85');
        userEvent.type(imgUrlInput, 'https://www.pexels.com/photo/silver-and-black-laptop-computer-1229861/');
        userEvent.type(descriptionInput, 'Silver and black laptop');

        //Simulating button click:
        userEvent.click(submitButton);

        //Verifying toast and redirection:
        await waitFor(() => {
            const toastElement = screen.getByText('Product registration successful!');
            expect(toastElement).toBeInTheDocument();
        });

        expect(history.location.pathname).toEqual('/admin/products');
    });

    test('should show 5 validation messages when clicking submit', async () => {

        render(
            <Router history={history}>
                <Form />
            </Router>
        );

        const submitButton = screen.getByRole('button', { name: /save/i });

        //Simulating button click:
        userEvent.click(submitButton);

        //Verifying required fields input:
        await waitFor(() => {
            const messages = screen.getAllByText('Required field!');
            expect(messages).toHaveLength(5);
        });
    });

    test('should clear validation messages when filling out the form correctly', async () => {

        render(
            <Router history={history}>
                <Form />
            </Router>
        );
        
        //Verifying required fields input (create 5 error messages):
        const submitButton = screen.getByRole('button', { name: /save/i });
        userEvent.click(submitButton);

        await waitFor(() => {
            const messages = screen.getAllByText('Required field!');
            expect(messages).toHaveLength(5);
        });

        //filling out the form correctly:
        const nameInput = screen.getByTestId("name");
        const priceInput = screen.getByTestId("price");
        const imgUrlInput = screen.getByTestId("imgUrl");
        const descriptionInput = screen.getByTestId("description");
        const categoriesInput = screen.getByLabelText("Categories");

        await selectEvent.select(categoriesInput, ['Electronics', 'Computers']);
        userEvent.type(nameInput, 'Computer');
        userEvent.type(priceInput, '1800.85');
        userEvent.type(imgUrlInput, 'https://www.pexels.com/photo/silver-and-black-laptop-computer-1229861/');
        userEvent.type(descriptionInput, 'Silver and black laptop');

        //Verifying required fields input (clearing validation messages):
        await waitFor(() => {
            const messages = screen.queryAllByText('Required field!');
            expect(messages).toHaveLength(0);
        });
    });
});

