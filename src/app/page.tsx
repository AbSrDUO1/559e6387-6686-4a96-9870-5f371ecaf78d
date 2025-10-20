"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextAbout from '@/components/sections/about/TextAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [{"id":"hero-image","url":"https://images.pexels.com/photos/6612575/pexels-photo-6612575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A close-up view of a professional espresso machine with syrup bottles in a coffee shop setting."},{"id":"about-image","url":"https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Smiling African American waitress wearing casual t shirt and apron standing at counter in cozy coffee shop with female customer while serving hot drink and looking at each other"},{"id":"testimonial-1","url":"https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Woman enjoying remote work at a café, using a laptop and smartphone."},{"id":"testimonial-2","url":"https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of espresso pouring from a shiny coffee machine into a white cup, perfect for lovers of caffeine and barista art."},{"id":"testimonial-3","url":"https://images.pexels.com/photos/4063795/pexels-photo-4063795.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A woman in a wheelchair wearing a red blazer sits at a café counter, enjoying leisure time indoors."},{"id":"testimonial-4","url":"https://images.pexels.com/photos/34321386/pexels-photo-34321386.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"coffee lover - Photo by Novkov Visuals"},{"id":"team-barista-img","url":"https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A barista holds a coffee cup with beautiful latte art in a cozy café setting."},{"id":"team-manager-img","url":"https://images.pexels.com/photos/4347119/pexels-photo-4347119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Mature man with laptop working in a coffee shop, surrounded by a busy environment."}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Coffee Haven"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Coffee Haven"
            description="Experience the best brews in town"
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url}
            buttons={[
              { text: "Order Now", href: "menu" },
              { text: "Learn More", href: "about" },
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our Story: Brewed with Passion"
            buttons={[
              { text: "Discover More", href: "about" },
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              {
                id: "1",
                name: "John Doe",
                role: "Regular Customer",
                testimonial: "The best coffee I've ever had!",
                imageSrc: assetMap.find(a => a.id === "testimonial-1")?.url,
              },
              {
                id: "2",
                name: "Jane Smith",
                role: "Coffee Lover",
                testimonial: "A perfect spot for a perfect cup.",
                imageSrc: assetMap.find(a => a.id === "testimonial-2")?.url,
              },
              {
                id: "3",
                name: "Sam Green",
                role: "Cafe Enthusiast",
                testimonial: "I can't get enough of their espresso.",
                imageSrc: assetMap.find(a => a.id === "testimonial-3")?.url,
              },
              {
                id: "4",
                name: "Alex Brown",
                role: "Coffee Connoisseur",
                testimonial: "Absolutely love the ambiance!",
                imageSrc: assetMap.find(a => a.id === "testimonial-4")?.url,
              },
            ]}
            title="Customer Reviews"
            description="See what our satisfied customers have to say"
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            members={[
              {
                id: "1",
                name: "Sophie P.",
                role: "Barista",
                imageSrc: assetMap.find(a => a.id === "team-barista-img")?.url,
              },
              {
                id: "2",
                name: "Amélie Laurent",
                role: "Manager",
                imageSrc: assetMap.find(a => a.id === "team-manager-img")?.url,
              },
            ]}
            title="Meet Our Team"
            description="The people behind each cup of excellence"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="Reach Out for Any Queries"
            description="We'd love to hear from you. Drop us a message or visit us."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Explore",
                items:[
                  { label: "About Us", href: "about" },
                  { label: "Menu", href: "menu" },
                  { label: "Contact", href: "contact" },
                ]
              }
            ]}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}