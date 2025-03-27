"use client"
import Navbar from "@/components/navbar";
import Image from "next/image";
import ContactPage from "@/components/contact-page";


export default function Page() {
    return (
        <>
        <Navbar />
        <section className="relative bg-[#4A148C] py-70 text-  text-white">
                <div className="container mx-auto px-6">
                  <h1 className="text-6xl text-center font-bold">Contacts</h1>
                </div>
                <Image src="/images/illustrations/leaf-yellow.png" alt="illustrations" width={120} height={120} className="absolute top-20 right-20" />
                <Image src="/images/illustrations/.png" alt="illustrations" width={120} height={120} className="absolute bottom-120 right-120" />
        
              </section>
        <ContactPage />
        </>
    );
 }