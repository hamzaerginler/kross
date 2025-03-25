"use client"

import Clients from "@/components/client";
import Navbar from "@/components/navbar";
import Image from "next/image";
import PortfolioPage from "@/components/portfolio-page";
import ContactForm from "@/components/contact-form";


export default function Page() {
    return (
        <>
        
        <Navbar />
        
        <PortfolioPage />
        <Clients />
        <ContactForm />
        
        </>

    );
 }