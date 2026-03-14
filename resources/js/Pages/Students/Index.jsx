import { usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useTranslation } from "react-i18next";
export default function Students() {
    const { name, last_name } = usePage().props;
    const { t, i18n } = useTranslation();
    return (
        <DashboardLayout>
            <main className="flex-1 p-6">
                <header className="mb-6 border-b pb-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                        {t("student_page")}
                    </h1>
                    <p className="text-sm text-gray-500">
                        {t("welcome_student_section")}
                    </p>
                </header>
                <section className="space-y-4">
                    <div className="bg-white p-6 rounded shadow">
                        <p className="text-gray-700">
                            {t("manage_student_description")}
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded shadow text-sm text-gray-600">
                        <p>
                            <strong>{t("name")}: {name}</strong>
                        </p>
                        <p>
                            <strong>{t("last_name")}: {last_name}</strong>
                        </p>
                    </div>
                </section>
            </main>
        </DashboardLayout>
    );
}
