import { render, screen } from '@testing-library/react';

import {
    CeoDashboard,
    CeoOverview,
    FinanceDestinationUpdateForm,
    FinanceFlightUpdateForm,
    FinanceForm,
    FinanceHotelUpdateForm,
    FinancePending,
    FinanceVehicleUpdateForm,
    Culture,
    CultureForm,
    CultureUpdateForm,
    Feedback,
    FeedbackForm,
    FeedbackUpdateForm,
    Invoice,
    InvoiceForm,
    InvoiceUpdateForm,
} from '../pages';

test('renders CeoDashboard', () => {
    render(<CeoDashboard />);
    const linkElement = screen.getByTestId("ceodashboard");
    expect(linkElement).toBeInTheDocument();
});

test('renders CeoOverview', () => {
    render(<CeoOverview />);
    const linkElement = screen.getByTestId("ceooverview");
    expect(linkElement).toBeInTheDocument();
});

test('renders FinanceDestinationUpdateForm', () => {
    render(<FinanceDestinationUpdateForm />);
    const linkElement = screen.getByTestId("financedestinationupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders FinanceFlightUpdateForm', () => {
    render(<FinanceFlightUpdateForm />);
    const linkElement = screen.getByTestId("financeflightupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders FinanceForm', () => {
    render(<FinanceForm />);
    const linkElement = screen.getByTestId("financeform");
    expect(linkElement).toBeInTheDocument();
});

test('renders FinanceHotelUpdateForm', () => {
    render(<FinanceHotelUpdateForm />);
    const linkElement = screen.getByTestId("financehotelupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders FinancePending', () => {
    render(<FinancePending />);
    const linkElement = screen.getByTestId("financepending");
    expect(linkElement).toBeInTheDocument();
});

test('renders FinanceVehicleUpdateForm', () => {
    render(<FinanceVehicleUpdateForm />);
    const linkElement = screen.getByTestId("financevehicleupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders Culture', () => {
    render(<Culture />);
    const linkElement = screen.getByTestId("culture");
    expect(linkElement).toBeInTheDocument();
});

test('renders CultureForm', () => {
    render(<CultureForm />);
    const linkElement = screen.getByTestId("cultureform");
    expect(linkElement).toBeInTheDocument();
});

test('renders CultureUpdateForm', () => {
    render(<CultureUpdateForm />);
    const linkElement = screen.getByTestId("cultureupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders Feedback', () => {
    render(<Feedback />);
    const linkElement = screen.getByTestId("feedback");
    expect(linkElement).toBeInTheDocument();
});

test('renders FeedbackForm', () => {
    render(<FeedbackForm />);
    const linkElement = screen.getByTestId("feedbackform");
    expect(linkElement).toBeInTheDocument();
});

test('renders FeedbackUpdateForm', () => {
    render(<FeedbackUpdateForm />);
    const linkElement = screen.getByTestId("feedbackupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders Invoice', () => {
    render(<Invoice />);
    const linkElement = screen.getByTestId("invoice");
    expect(linkElement).toBeInTheDocument();
});

test('renders InvoiceForm', () => {
    render(<InvoiceForm />);
    const linkElement = screen.getByTestId("invoiceform");
    expect(linkElement).toBeInTheDocument();
});

test('renders InvoiceUpdateForm', () => {
    render(<InvoiceUpdateForm />);
    const linkElement = screen.getByTestId("invoiceupdateform");
    expect(linkElement).toBeInTheDocument();
});