import { render, screen } from '@testing-library/react';

import {
    Home,
    PackageForm,
    PackagePreview,
    PackageReservationForm,
    PackageReservationUpdateForm,
    Packages,
    PackagesEdit,
    PackageUpdateForm,
    UserProfile,
    ProfileUpdateForm,
    RegistrationForm
} from '../pages';

test('renders Home', () => {
    render(<Home />);
    const linkElement = screen.getByTestId("home");
    expect(linkElement).toBeInTheDocument();
});

test('renders PackageForm', () => {
    render(<PackageForm />);
    const linkElement = screen.getByTestId("packageform");
    expect(linkElement).toBeInTheDocument();
});

test('renders PackagePreview', () => {
    render(<PackagePreview />);
    const linkElement = screen.getByTestId("packagepreview");
    expect(linkElement).toBeInTheDocument();
});

test('renders PackageReservationForm', () => {
    render(<PackageReservationForm />);
    const linkElement = screen.getByTestId("packagereservationform");
    expect(linkElement).toBeInTheDocument();
});

test('renders PackageReservationUpdateForm', () => {
    render(<PackageReservationUpdateForm />);
    const linkElement = screen.getByTestId("packagereservationupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders Packages', () => {
    render(<Packages />);
    const linkElement = screen.getByTestId("packages");
    expect(linkElement).toBeInTheDocument();
});

test('renders PackagesEdit', () => {
    render(<PackagesEdit />);
    const linkElement = screen.getByTestId("packagesedit");
    expect(linkElement).toBeInTheDocument();
});

test('renders PackageUpdateForm', () => {
    render(<PackageUpdateForm />);
    const linkElement = screen.getByTestId("packageupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders UserProfile', () => {
    render(<UserProfile />);
    const linkElement = screen.getByTestId("userprofile");
    expect(linkElement).toBeInTheDocument();
});

test('renders ProfileUpdateForm', () => {
    render(<ProfileUpdateForm />);
    const linkElement = screen.getByTestId("profileupdateform");
    expect(linkElement).toBeInTheDocument();
});

test('renders RegistrationForm', () => {
    render(<RegistrationForm />);
    const linkElement = screen.getByTestId("registrationform");
    expect(linkElement).toBeInTheDocument();
});