"use client";
export default function Footer() {
    return (
        <footer className="bg-black text-white py-20">
        <div className="container mx-auto px-4 grid grid-cols-3 gap-8 grid-mobile">
          <div>
            <h4 className="font-semibold mb-4">Email</h4>
            <p>steve.fruits@email.com</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Phone</h4>
            <p>+880 2544 658 256</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Address</h4>
            <p>125A, CA Commercial Area,<br />California, USA</p>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          Copyright © 2023 Designed & Developed by ThemeFisher
        </div>
      </footer>
    );
  }