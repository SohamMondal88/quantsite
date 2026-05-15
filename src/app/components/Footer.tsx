import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full px-8 md:px-16 py-16">
      <div className="max-w-[1200px] mx-auto">
        <Image
          src="/images/footer.png"
          alt="Footer"
          width={1200}
          height={300}
          className="w-full h-auto mb-8"
        />

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-white/60">
            © 2024 Quantsuite. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
