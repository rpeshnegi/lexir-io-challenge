import Footer from "@components/Footer";
import Header from "@components/Header";

interface ILayoutProps {
    children: React.ReactNode,
};

export default function Layout({ children }: ILayoutProps) {
    return (
        <div className="container-xl mx-auto">
            <Header />
            {children}
            <Footer />
        </div>
    )
}
