import { Link, router, usePage } from "@inertiajs/react";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { useTranslation } from "react-i18next";
import { useState } from "react";
export default function Students() {
    // const { name, last_name } = usePage().props;
    const {
        students,
        search: initialSearch,
        sort,
        direction,
        flash,
    } = usePage().props;
    console.log(students);
    const { t } = useTranslation();

    const [search, setSearch] = useState(initialSearch || "");

    const handleSearch = (e) => {
        e.preventDefault();

        router.get(
            "students",
            { search },
            {
                preserveState: true,
                replace: true,
            },
        );
    };

    // const handleSort = (field) => {
    //     const newDirection = sort ===
    // }

    const handlePageChange = (url) => {
        if (url) router.visit(url);
    };

    const [msg, setmsg] = useState(flash.success);

    setTimeout(() => {
        setmsg(null);
    }, 2000);

    return (
        <DashboardLayout>
            <main className="flex-1 p-6">
                {msg && (
                    <div className="mb-4 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
                        {msg}
                    </div>
                )}
                <header className="mb-6 border-b pb-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                        {t("student_page")}
                    </h1>
                    <p className="text-sm text-gray-500">
                        {t("welcome_student_section")}
                    </p>
                </header>

                <form onSubmit={handleSearch} className="mb-4 flex gap-2">
                    <input
                        type="text"
                        placeholder={t("Search students...")}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-1/3 px-3 py-2 border rounded"
                    />
                    <button
                        type="submit"
                        className="px-4 py2 bg-blue-600 text-white"
                    >
                        {t("Search")}
                    </button>
                </form>

                <div className="overflow-x-auto bg-white rounded shadow p-4">
                    <Link
                        href={route("students.create")}
                        className="inline-block mb-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
                    >
                        {t("Create Students")}
                    </Link>

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
                                <tr
                                    key={student.id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="p-2">
                                        {students.from + index}
                                    </td>
                                    <td className="p-2">{student.name}</td>
                                    <td className="p-2">{student.email}</td>
                                    <td className="p-2">{student.gender}</td>
                                    <td className="p-2">{student.score}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-4 flex flex-wrap justify-center gap-1">
                        {students.links.map((link, idx) => (
                            <button
                                key={idx}
                                disabled={!link.url || link.active}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`px-3 py-1 text-sm rounded border ${
                                    link.active
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                                } ${
                                    !link.url
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                onClick={() => handlePageChange(link.url)}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </DashboardLayout>
    );
}
