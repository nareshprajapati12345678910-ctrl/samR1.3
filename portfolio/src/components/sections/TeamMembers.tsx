import { motion } from "framer-motion";

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Sameer",
        role: "Creative Director",
        image: "/Sameer.png"
    },
    {
        id: 2,
        name: "Naresh",
        role: "BD Lead/Creative ",
        image: "/Naresh.png",
    },
    {
        id: 3,
        name: "Saniya",
        role: "Creative ",
        image: "/Saniya.png",
    },
    {
        id: 4,
        name: "Sujal",
        role: "Creative director",
        image: "/Sujal.png",
    },
    {
        id: 5,
        name: "Aniket",
        role: "Biz dev(BD) director",
        image: "/Aniket.png",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    },
};

export default function TeamMembers() {
    return (
        <section id="team" className="bg-background py-24 transition-colors duration-300 md:py-32">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-sm font-bold tracking-widest uppercase text-muted-foreground mb-4 block">
                        Our Team
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                        Meet the talented people behind our success.
                    </h2>
                    <div className="w-16 h-1 bg-foreground mx-auto"></div>
                </motion.div>

                {/* Team Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            variants={cardVariants}
                            className="group"
                        >
                            <div className="w-72 h-96 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlay Effect */}
                            <motion.div
                                className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 rounded-lg pointer-events-none"
                            />

                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-center"
                            >
                                <h3 className="font-serif text-xl font-bold mb-2 text-foreground group-hover:text-foreground/80 transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                                    {member.role}
                                </p>
                            </motion.div>

                            {/* Bottom Border Animation */}
                            <motion.div
                                className="h-0.5 bg-foreground mt-4 origin-left"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div >
        </section >
    );
}
