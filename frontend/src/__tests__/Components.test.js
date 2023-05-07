import { render, screen } from '@testing-library/react';

import CeoDashSidebar from '../components/CeoDashSidebar';
import ClientDashSidebar from '../components/ClientDashSidebar';
import DesSidebar from '../components/DesSidebar';
import EditorDashSidebar from '../components/EditorDashSidebar';
import EditorNavbar from '../components/EditorNavbar';
import FinanceDashSidebar from '../components/FinanceDashSidebar';
import Footer from '../components/Footer';
import NavbarDark from '../components/NavbarDark';
import Navbar from '../components/NavbarDark';

test('renders CeoDashSidebar', () => {
    render(<CeoDashSidebar />);
    const linkElement = screen.getByTestId("ceodashsidebar");
    expect(linkElement).toBeInTheDocument();
});

test('renders ClientDashSidebar', () => {
    render(<ClientDashSidebar />);
    const linkElement = screen.getByTestId("clientsashsidebar");
    expect(linkElement).toBeInTheDocument();
});

test('renders DesSidebar', () => {
    render(<DesSidebar />);
    const linkElement = screen.getByTestId("dessidebar");
    expect(linkElement).toBeInTheDocument();
});

test('renders EditorDashSidebar', () => {
    render(<EditorDashSidebar />);
    const linkElement = screen.getByTestId("editordashsidebar");
    expect(linkElement).toBeInTheDocument();
});

test('renders EditorNavbar', () => {
    render(<EditorNavbar />);
    const linkElement = screen.getByTestId("editornavbar");
    expect(linkElement).toBeInTheDocument();
});

test('renders FinanceDashSidebar', () => {
    render(<FinanceDashSidebar />);
    const linkElement = screen.getByTestId("financedashsidebar");
    expect(linkElement).toBeInTheDocument();
});

test('renders Footer', () => {
    render(<Footer />);
    const linkElement = screen.getByTestId("footer");
    expect(linkElement).toBeInTheDocument();
});

test('renders NavbarDark', () => {
    render(<NavbarDark />);
    const linkElement = screen.getByTestId("navbardark");
    expect(linkElement).toBeInTheDocument();
});

test('renders Navbar', () => {
    render(<Navbar />);
    const linkElement = screen.getByTestId("navbar");
    expect(linkElement).toBeInTheDocument();
});