const recentUpdates = (req, res) => {
    try {
        const updates = {
            mainUpdates: [
                {
                    date: "January 5, 2025",
                    title: "Pioneering Telecom Excellence",
                    description: "With 19+ years of experience, VS&V delivers innovative telecom solutions across India and Nepal, trusted by global leaders like Huawei and Smarttel.",
                    image: "https://media.licdn.com/dms/image/v2/D5622AQGPfbqYP0JLVw/feedshare-shrink_2048_1536/B56ZQpIoqoG8As-/0/1735856918218?e=1738800000&v=beta&t=s5vr5Locc7q51PIyf31mwQoG_z-JNG1u2YxfDmLjmco",
                    isFirstRow: true
                },
                {
                    date: "January 8, 2025",
                    title: "Innovating at New Heights",
                    description: "VS&V creates functional and inspiring interiors, setting new standards in design and craftsmanship.",
                    image:"https://media.licdn.com/dms/image/v2/D5622AQEL_FK8PkM8ww/feedshare-shrink_1280/B56ZQpIoq3HoAk-/0/1735856917964?e=1738800000&v=beta&t=ykfUo_SjJ1CBCRqAlx29bNxEvVZC2yp9Ely_IA833AM",
                    isBlack: true
                },
                {
                    date: "January 12, 2025",
                    title: "Sustainability in Modern Construction",
                    image: "https://media.licdn.com/dms/image/v2/D5622AQGxod-Y1pmOnA/feedshare-shrink_2048_1536/B56ZQpIop9GsAo-/0/1735856918314?e=1738800000&v=beta&t=azl96EvrL9YGLz9RF1TG8s7uLJ7eJYfDMu0BMSTDuR4",
                    description: "VS&V excels in challenging terrains, exemplified by projects like Mount Gauri Shankar Base."
                }
            ],
            bottomCards: [
                {
                    type: "About",
                    date: "January 15, 2025",
                    title: "Fostering Team Spirit",
                    image: "https://media.licdn.com/dms/image/v2/D5622AQG_0joR4-CW8g/feedshare-shrink_2048_1536/B56ZQpIoqqHIAs-/0/1735856918153?e=1738800000&v=beta&t=heXD2cFJjvZ5NC3CgCFG343Et5M-dxF6s9xy8OFlSdg",
                    description: "VS&V promotes teamwork and morale through events like our Annual Meeting, building a culture of excellence."
                },
                {
                    type: "Services",
                    date: "January 20, 2025",
                    title: "Building the Future",
                    image: "https://media.licdn.com/dms/image/v2/D5622AQHjRrlCv_dMwQ/feedshare-shrink_2048_1536/B56ZQpIoqrGQAo-/0/1735856918401?e=1738800000&v=beta&t=gr4yunr89XMZqPw2rbbdQtD-gPDQpwZeiDKQt4-_IOw",
                    description: "VS&V is shaping skylines with innovative construction and telecom infrastructure projects.",
                    isBlack: true
                },
                {
                    type: "Post",
                    date: "January 25, 2025",
                    title: "Certified for Excellence",
                    image: "https://media.licdn.com/dms/image/v2/D5622AQGSAPXuMBjPQQ/feedshare-shrink_2048_1536/B56ZQpIoq9HIA0-/0/1735856918007?e=1738800000&v=beta&t=LOS-Banvyr2DJ8EWj3DD9Fts-dqIDe502EHsY1iDNx0",
                    description: "Our ISO certifications reflect our dedication to quality and safety in every project."
                },
                {
                    type: "Projects",
                    date: "January 30, 2025",
                    title: "Introducing the VS&V Group",
                    image: "https://media.licdn.com/dms/image/v2/D5622AQFCSN7GoXBWSw/feedshare-shrink_2048_1536/B56ZQpIoqhGQAo-/0/1735856920140?e=1738800000&v=beta&t=McBl0o3Heg9RXig0kf2KtlXh_ReayHtf4qfk6BFJz8A",
                    description: "VS&V Group combines expertise from Communication and Techno Engineering for greater impact and growth.",
                    isBlack: true
                }
            ]
        };

        res.status(200).json(updates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { recentUpdates };