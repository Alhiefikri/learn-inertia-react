import { router, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useTranslation } from "react-i18next";
export default function Students() {
    // const { name, last_name } = usePage().props;
    const { students } = usePage().props;
    console.log(students);
    const { t, i18n } = useTranslation();

    const handlePageChange = (url) => {
        if (url) router.visit(url);
    };

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
                <div className="overflow-x-auto bg-white rounded shadow p-4">
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
                                <th className="p-2">#</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Gender</th>
                                <th className="p-2">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.data.map((student, index) => (
                                <tr>
                                    <td className="p-2">{index + 1}</td>
                                    <td className="p-2">{student.name}</td>
                                    <td className="p-2">{student.email}</td>
                                    <td className="p-2">{student.gender}</td>
                                    <td className="p-2">{student.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div>
                        {students.links.map((link, idx) => (
                            <button
                                key={idx}
                                disabled={!link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`px-3 py-1 rounded`}
                                onClick={() => handlePageChange(link.url)}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}
