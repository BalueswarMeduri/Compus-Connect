import { getUserEmails } from "@/connecting/connecting";
import React, { useEffect, useState } from "react";

const Cabintable = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const problems = [
        { lang: "1", duration: "Prof. Siva Sankar Y", video: "sivasankar.y@srmap.edu.in ", documentation: "New Academic Building, second floor, cabin number 3" },
        { lang: "2", duration: "Prof. Jiji C V", video: "jiji.c@srmap.edu.in", documentation: "New Academic Building, 708" },
        { lang: "3", duration: "Dr Ramesh Vaddi", video: "ramesh.v@srmap.edu.in", documentation: "New Academic Building, 416" },
        { lang: "4", duration: "Dr M Ramkrishnan", video: "ramakrishnan.m@srmap.edu.in", documentation: "SC 06, Level 7, New Academic Building" },
        { lang: "5", duration: "Dr M Durga Prakash", video: "durgaprakash.m@srmap.edu.in", documentation: "SC 06, Level 7, New Academic Building" },
        { lang: "6", duration: "Dr K A Sunitha", video: "sunitha.ka@srmap.edu.in", documentation: "SC 06, Level 7, New Academic Building" },
        { lang: "7", duration: "Dr E Karthikeyan", video: "karthikeyan.e@srmap.edu.in", documentation: "Xlab-302" },
        { lang: "8", duration: "Dr Pradyut Sanki", video: "pradyut.s@srmap.edu.in", documentation: "XLab, X307" },
        { lang: "9", duration: "Dr Sreenivasulu T", video: "sreenivasulu.t@srmap.edu.in", documentation: "New Academic Building,level 4, 413" },
        { lang: "10", duration: "Dr Sudhakar Tummala", video: "sudhakar.t@srmap.edu.in", documentation: "16A,Level 2,Admin Block" },
        { lang: "11", duration: "Dr Sateeshkrishna Dhuli", video: "sateeshkrishna.d@srmap.edu.in", documentation: "New Academic Building, 408" },
        { lang: "12", duration: "Dr  V Uday Sankar", video: "udayasankar.v@srmap.edu.in", documentation: "New academic block 406" },
        { lang: "13", duration: "Dr Goutam Rana", video: "goutam.r@srmap.edu.in", documentation: "Cabin 20, 6th floor, New academic block" },
        { lang: "14", duration: "Dr Sateeshkrishna Dhuli", video: "sateeshkrishna.d@srmap.edu.in", documentation: "New Academic Building, 408" },
        { lang: "15", duration: "Dr Sateeshkrishna Dhuli", video: "sateeshkrishna.d@srmap.edu.in", documentation: "New Academic Building, 408" },
    ];

    const filteredProblems = problems.filter(problem =>
        Object.values(problem)
            .some(value => value.toLowerCase().includes(searchTerm.toLowerCase()))
    );

     return (
        <>
            <div className="pt-40 px-5">
                <div className="text-4xl font-bold text-center mb-5">Cabin Finder</div>
                <div className="mb-5 flex justify-end">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-2 w-80 border border-white bg-black text-white rounded-md"
                    />
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full border-separate border-spacing-1 ">
                        <thead className=" bg-gray-500">
                            <tr className="">
                                <th className="py-3 px-4 text-left font-semibold text-xl">S.No</th>
                                <th className="py-3 px-4 text-left font-semibold text-xl">Name</th>
                                <th className="py-3 px-4 font-semibold text-xl">Emails</th>
                                <th className="py-3 px-4 font-semibold text-xl">Cabins</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            {filteredProblems.map((problem, index) => (
                                <tr key={index} className="border-b border-gray-600">
                                    <td className="py-3 px-4">{problem.lang}</td>
                                    <td className="py-3 px-4">{problem.duration}</td>
                                    <td className="py-3 px-4">
                                        <a href={`mailto:${problem.video}`} className="text-[var(--green)]">{problem.video}</a>
                                    </td>
                                    <td className="py-3 px-4">{problem.documentation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Cabintable;
