import Box from "./components/box";
import {Separator} from "./components/ui/separator.tsx";
import {Badge} from "./components/ui/badge.tsx";
import pfp from "./assets/pfp.png"
import payment_bot_preview from "./assets/payment_bot_n.gif"
import sub_bot_preview from "./assets/sub_bot_n.gif"
import foodJs from "./assets/foodJs_n.gif"
import torrent from "./assets/torrent_n.gif"
import cshood from "./assets/cshood_n.gif"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";

function App() {
    const techs = [{name: "Languages", list: ["Javascript/Typescript", "Python", "C#"]}, {
        name: "Front-end",
        list: ['React', 'Zustand', "Shadcn", "Tailwind", "Sass", "MaterialUI", "StyledComponents"]
    }, {
        name: "Backend-end",
        list: ["Node", "Nest.js", "Express.js"]
    }, {name: "Tests", list: ["Cypress.js", "Playwright"]}]


    const social = [{name: "LinkedIn", to: "https://www.linkedin.com/in/makar-troshin-96a665207/"}, {
        name: "Git",
        to: "https://github.com/Animels"
    }, {
        name: "Email",
        to: "mailto:makfa200222@gmail.com"
    }]

    const projects = [{
        preview: cshood,
        name: "CS hood",
        description: "User interface for CS:GO/CS2 broadcasting",
        techs: ["Typescript", "Solid.js", "Node"],
        repo: "https://github.com/Animels/simple_cs_hud"
    }, {
        preview: foodJs,
        name: "FoodJs",
        description: "User interface for ordering food",
        techs: ["Typescript", "React", "CSS", "Zustand", "Vite", "Node", "Express.js"],
        repo: "https://github.com/Animels/foodjs"
    }, {
        preview: torrent,
        name: "Implementation of Torrent protocol",
        description: "Small recreation of Torrent protocol.",
        techs: ["Python"],
        repo: "https://github.com/Animels/mini-torrent"
    }, {
        preview: payment_bot_preview,
        name: "Telegram access bot",
        description: "Telegram bot that provides management and access to private channels, after user pays fo access.",
        techs: ["Typescript", "Node", "Telegram API"],
        repo: "https://github.com/Animels/sub-bot"
    }, {
        preview: sub_bot_preview,
        name: "Telegram subscription bot",
        description: "Telegram bot that monitors all subscribed channels and aggregates them in one place.",
        techs: ["Typescript", "Node", "Telegraph"],
        repo: "https://github.com/Animels/cs-bot"
    }]


    const SwitchTheme = () => {
        if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark")
        } else {
            document.documentElement.classList.add("dark")
        }
    }

    return (
        <>
            <div className={"flex flex-col md:flex-row md:h-full w-full"}>
                <Box
                    className={"flex flex-col justify-evenly items-center bg-background overflow-auto md:max-h-full md:min-w-1/3"}>
                    <div className={"flex items-center flex-col gap-2"}>
                        <img alt={"Profile picture"} className={'max-h-32 rounded-full'} src={pfp}/>
                        <span>Makar Troshin</span>
                        <span className={"text-center "}>QA by title, developer by heart. Started in testing, grew into frontend development and automation. Always building, always learning.</span>

                        <div>{techs.map((t) => <Box>
                            <span>{t.name}: </span>
                            <div className={"flex flex-wrap gap-2"}>{t.list.map((t) =>
                                <Badge>{t}</Badge>)} </div>
                        </Box>)}</div>
                    </div>

                    <div className={" w-full flex items-center flex-col gap-2"}>
                        <button className={"bg-background text-foreground"} onClick={SwitchTheme}>Switch Theme
                        </button>

                        <Separator/>
                        <div className={"justify-center flex gap-2"}>{social.map((t) => <Badge><a target={'_blank'}
                                                                                                  href={t.to}>{t.name}</a></Badge>)}</div>
                    </div>
                </Box>
                <Box className={"bg-background-second md:h-full md:overflow-scroll md:overflow-x-hidden"}>
                    <Box className={"flex flex-col gap-2"}>
                        <h2 className="text-2xl font-bold tracking-tight">
                            About me
                        </h2>
                        <span>
                        Started my career in manual QA, gradually expanding into automation and frontend development through real-world product work.
                            Over the years, I’ve tested everything from backend APIs to complex UIs, while also contributing code to frontend components.
                            Passionate about clean UI, developer experience, and bridging the gap between testing and development.
                            Main tool for frontend is React, for automation-Cypress, backend-Node.
                            Currently focused on growing as a frontend engineer while having responsibilities as a QA.
                        </span>
                    </Box>

                    <Box className={"flex flex-col gap-4"}>
                        <h2 className="text-2xl font-bold tracking-tight">
                            My projects
                        </h2>
                        <div className={"flex flex-col gap-2"}>
                            {projects.map((p) => <Card>
                                <CardHeader>
                                    <CardTitle>{p.name}</CardTitle>
                                    <CardDescription>{p.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <img alt={"App preview"} src={p.preview}/>
                                </CardContent>
                                <CardFooter className={"flex flex-col items-start gap-2"}>
                                    <p className={"flex gap-2 flex-wrap"}>{p.techs.map((t) =>
                                        <Badge>{t}</Badge>)}</p>
                                    <a target={'_blank'} href={p.repo}>Repo</a>
                                </CardFooter>
                            </Card>)}
                        </div>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default App
