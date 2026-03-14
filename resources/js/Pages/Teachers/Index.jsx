import Sidebar from "@/Components/Sidebar";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

function Teachers() {
    const { user_name } = usePage().props;
    const { t, i18n } = useTranslation();

    return (
        <main className="flex-1 p-6">
            <header className="mb-6 border-b pb-4">
                <h1 className="text-2xl font-bold text-gray-800">
                    {t("teacher_page")}
                </h1>
                <p className="text-sm text-gray-500">
                    {t("welcome_teacher_system")}
                </p>
            </header>
            <section className="space-y-4">
                <div className="bg-white p-6 rounded shadow">
                    <p className="text-gray-700">
                        {t("manage_teacher_description")}
                    </p>
                </div>
                <div className="bg-white p-4 rounded shadow text-sm text-gray-600">
                    <p>
                        <strong>{t("name")}:</strong>
                    </p>
                    <p>
                        <strong>{t("last_name")}:</strong>
                    </p>

                    <p>The User name is {user_name}</p>
                </div>
            </section>
        </main>
    );
}

// Teachers.layout = function (page) {
//     return <DashboardLayout>{page}</DashboardLayout>;
// };

Teachers.layout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Teachers;
