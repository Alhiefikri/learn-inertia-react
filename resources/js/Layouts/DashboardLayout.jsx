import LanguageSwitcher from "@/Components/LanguageSwitcher";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function DashboardLayout({ children }) {
    const [mountedAt] = useState(new Date().toLocaleTimeString());
    const { t, i18n } = useTranslation();
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1">
                <header className="bg-white shadow p-4">
                    {t("topbar_mounted")} {mountedAt}
                    <LanguageSwitcher />
                </header>
                <section className="p-4">{children}</section>
            </main>
        </div>
    );
}
