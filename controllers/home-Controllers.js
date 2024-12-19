const recentUpdates = (req, res) => {
    try {
        const updates = {
            mainUpdates: [
                {
                    date: "2nd December 2024",
                    title: "VSV Builders Second Quarter Updates",
                    description: "Comprehensive overview of our recent construction projects and innovative approaches to building sustainable infrastructure.",
                    image: "https://plus.unsplash.com/premium_photo-1682617326364-8fb636f7bea0?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    isFirstRow: true
                },
                {
                    date: "15th November 2024",
                    title: "Innovative Construction Technologies",
                    image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                    description: "Exploring cutting-edge technologies",
                    isBlack: true
                },
                {
                    date: "10th October 2024",
                    title: "Sustainability in Modern Construction",
                    image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                    description: "Our commitment to environmentally friendly building practices"
                }
            ],
            bottomCards: [
                {
                    type: "About",
                    date: "5th September 2024",
                    title: "VSV Communication Milestone",
                    image: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                    description: "Celebrating our achievements and the impact we've made in the construction and communication sectors."
                },
                {
                    type: "Services",
                    date: "20th August 2024",
                    title: "Comprehensive Construction Services",
                    image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                    description: "A deep dive into the range of services we offer, from project planning to final execution.",
                    isBlack: true
                },
                {
                    type: "Post",
                    date: "1st July 2024",
                    title: "Urban Development Insights",
                    image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                    description: "Analyzing the latest trends and challenges in urban construction and infrastructure development."
                },
                {
                    type: "Projects",
                    date: "15th June 2024",
                    title: "Landmark Project Showcase",
                    image: "https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
                    description: "Highlighting our most significant and impactful construction projects of the year.",
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