import { render, screen } from '@testing-library/react';

import RentalForm from '../pages/RentalForm';
import RentalPreview from '../pages/RentalPreview';
import RentalUpdateForm from '../pages/RentalUpdateForm';
import Taxis from '../pages/Taxis';
import VehicleForm from '../pages/VehicleForm';
import Vehicles from '../pages/Vehicles';
import VehiclesEdit from '../pages/VehiclesEdit';
import VehicleUpdateForm from '../pages/VehicleUpdateForm';

import HotelEdit from '../pages/HotelEdit';
import HotelForm from '../pages/HotelForm';
import HotelPreview from '../pages/HotelPreview';
import HotelResForm from '../pages/HotelResForm';
import HotelResUpdateForms from '../pages/HotelResUpdateForms';
import Hotels from '../pages/Hotels';
import HotelUpdateForm from '../pages/HotelUpdateForm';

test('renders RentalForm', () => {
    render(<RentalForm />);
    const linkElement = screen.getByTestId("rentalform");
    expect(linkElement).toBeInTheDocument();
});

test('renders RentalPreview', () => {
    render(<RentalPreview />);
    const linkElement = screen.getByTestId("rentalpreview");
    expect(linkElement).toBeInTheDocument();
});

test('renders RentalUpdateForm', () => {
    render(<RentalUpdateForm />);
    const linkElement = screen.getByTestId("rentalupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders Taxis', () => {
    render(<Taxis />);
    const linkElement = screen.getByTestId("taxis");
    expect(linkElement).toBeInTheDocument();
});

test('renders VehicleForm', () => {
    render(<VehicleForm />);
    const linkElement = screen.getByTestId("vehicleform");
    expect(linkElement).toBeInTheDocument();
});

test('renders Vehicles', () => {
    render(<Vehicles />);
    const linkElement = screen.getByTestId("vehicles");
    expect(linkElement).toBeInTheDocument();
});

test('renders VehiclesEdit', () => {
    render(<VehiclesEdit />);
    const linkElement = screen.getByTestId("vehiclesedit");
    expect(linkElement).toBeInTheDocument();
});

test('renders VehicleUpdateForm', () => {
    render(<VehicleUpdateForm />);
    const linkElement = screen.getByTestId("vehicleupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders HotelEdit', () => {
    render(<HotelEdit />);
    const linkElement = screen.getByTestId("hoteledit");
    expect(linkElement).toBeInTheDocument();
});

test('renders HotelForm', () => {
    render(<HotelForm />);
    const linkElement = screen.getByTestId("hotelform");
    expect(linkElement).toBeInTheDocument();
});

test('renders HotelPreview', () => {
    render(<HotelPreview />);
    const linkElement = screen.getByTestId("hotelpreview");
    expect(linkElement).toBeInTheDocument();
});

test('renders HotelResForm', () => {
    render(<HotelResForm />);
    const linkElement = screen.getByTestId("hotelresform");
    expect(linkElement).toBeInTheDocument();
});

test('renders HotelResUpdateForms', () => {
    render(<HotelResUpdateForms />);
    const linkElement = screen.getByTestId("hotelresupdateforms");
    expect(linkElement).toBeInTheDocument();
});

test('renders Hotels', () => {
    render(<Hotels />);
    const linkElement = screen.getByTestId("hotels");
    expect(linkElement).toBeInTheDocument();
});

test('renders HotelUpdateForm', () => {
    render(<HotelUpdateForm />);
    const linkElement = screen.getByTestId("hotelupdateform");
    expect(linkElement).toBeInTheDocument();
});
