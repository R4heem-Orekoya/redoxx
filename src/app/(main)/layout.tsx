import Providers from "@/providers"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Buymecoffee from "@/components/buy-me-coffee";

export default function Layout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <Providers>
      <div className="pt-20 pb-12 font-inter">
        <Navbar />
        <div className="relative container max-w-[692px] px-4 mx-auto">
          {children}
          <Buymecoffee />
        </div>
        <Footer />
      </div>
    </Providers>
  )
}