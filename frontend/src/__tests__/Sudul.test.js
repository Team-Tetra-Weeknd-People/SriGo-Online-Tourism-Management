import { render, screen } from '@testing-library/react';

import {
    Attractions,
    AttractionsEdit,
    Bookings,
    DesPreview,
    DesResForm,
    DesResUpdateForm,
    DestinationForm,
    DestinationUpdateForm,
    FlightEdit,
    FlightForm,
    FlightPreview,
    FlightResForm,
    FlightResUpdateForm,
    Flights,
    FlightTicketView,
    FlightUpdateForm
} from '../pages';

test('renders Attractions', () => {
    render(<Attractions />);
    const linkElement = screen.getByTestId("attractions");
    expect(linkElement).toBeInTheDocument();
});

test('renders AttractionsEdit', () => {
    render(<AttractionsEdit />);
    const linkElement = screen.getByTestId("attractionsedit");
    expect(linkElement).toBeInTheDocument();
});

test('renders Bookings', () => {
    render(<Bookings />);
    const linkElement = screen.getByTestId("bookings");
    expect(linkElement).toBeInTheDocument();
});

test('renders DesPreview', () => {
    render(<DesPreview />);
    const linkElement = screen.getByTestId("despreview");
    expect(linkElement).toBeInTheDocument();
});

test('renders DesResForm', () => {
    render(<DesResForm />);
    const linkElement = screen.getByTestId("desresform");
    expect(linkElement).toBeInTheDocument();
});

test('renders DesResUpdateForm', () => {
    render(<DesResUpdateForm />);
    const linkElement = screen.getByTestId("desresupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders DestinationForm', () => {
    render(<DestinationForm />);
    const linkElement = screen.getByTestId("destinationform");
    expect(linkElement).toBeInTheDocument();
});

test('renders DestinationUpdateForm', () => {
    render(<DestinationUpdateForm />);
    const linkElement = screen.getByTestId("destinationupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders FlightEdit', () => {
    render(<FlightEdit />);
    const linkElement = screen.getByTestId("flightedit");
    expect(linkElement).toBeInTheDocument();
});

test('renders FlightForm', () => {
    render(<FlightForm />);
    const linkElement = screen.getByTestId("flightform");
    expect(linkElement).toBeInTheDocument();
});

test('renders FlightPreview', () => {
    render(<FlightPreview />);
    const linkElement = screen.getByTestId("flightpreview");
    expect(linkElement).toBeInTheDocument();
});

test('renders FlightResForm', () => {
    render(<FlightResForm />);
    const linkElement = screen.getByTestId("flightresform");
    expect(linkElement).toBeInTheDocument();
});

test('renders FlightResUpdateForm', () => {
    render(<FlightResUpdateForm />);
    const linkElement = screen.getByTestId("flightresupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders Flights', () => {
    render(<Flights />);
    const linkElement = screen.getByTestId("flights");
    expect(linkElement).toBeInTheDocument();
});

test('renders FlightTicketView', () => {
    render(<FlightTicketView />);
    const linkElement = screen.getByTestId("flightticketview");
    expect(linkElement).toBeInTheDocument();
});

test('renders FlightUpdateForm', () => {
    render(<FlightUpdateForm />);
    const linkElement = screen.getByTestId("flightupdateform");
    expect(linkElement).toBeInTheDocument();
});

