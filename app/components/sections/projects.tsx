import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/ui/timeline"

const roadmap = [
    {
        id: 1,
        date: "2026",
        title: "Blockly Redesign Project",
        description:
            "Redesigned the user interface and interaction flow of Google Blockly, focusing on improving usability, visual hierarchy, and beginner accessibility. Implemented a modern interface with enhanced block organization, clearer color coding, and intuitive drag-and-drop behavior to simplify learning visual programming. The redesign emphasizes responsive layouts, improved workspace navigation, and better onboarding for first-time users while maintaining Blockly’s core block-based programming functionality.",
    },
    {
        id: 2,
        date: "2025",
        title: "Search and Rescue Drone",
        description:
            "Developed a search-and-rescue drone concept designed to locate disaster survivors using thermal imaging and computer vision. The system uses a thermal camera to detect human body heat and an AI model to automatically identify people in aerial footage. The goal is to assist rescue teams by quickly scanning inaccessible terrain, smoke-filled environments, or low-visibility disaster zones while reducing risk to human rescuers. A YOLO-based object detection model was trained and tested using thermal imagery datasets in Google Colab, enabling real-time detection of human figures from drone-captured video streams. The drone architecture integrates aerial robotics, thermal sensing, and embedded AI processing for faster survivor detection.",
    },
    {
        id: 3,
        date: "2024",
        title: "Bird Sound Cartographer",
        description:
            "Built an acoustic localization system that detects and maps the direction of bird sounds in real time. Using a Raspberry Pi connected to a microphone array, the system captures environmental audio, processes it to estimate the sound source direction, and visualizes the detected location on a web-based map. A machine learning model was trained on bird call datasets to classify bird species from audio signals. The project combines signal processing, sound localization, and ML-based classification to help monitor wildlife activity and analyze bird populations.",
    },
]

export function Projects() {
    return (
        <Timeline defaultValue={2} className="w-full">

            {roadmap.map((item) => (
                <TimelineItem
                    key={item.id}
                    step={item.id}
                    className="sm:group-data-[orientation=vertical]/timeline:ms-32"
                >
                    <TimelineHeader>

                        <TimelineSeparator />

                        {/* Date */}
                        <TimelineDate
                            className="
                            text-sm sm:text-md
                            mb-1 sm:mb-0
                            sm:group-data-[orientation=vertical]/timeline:absolute
                            sm:group-data-[orientation=vertical]/timeline:-left-32
                            sm:group-data-[orientation=vertical]/timeline:w-20
                            sm:group-data-[orientation=vertical]/timeline:text-right
                            "
                        >
                            {item.date}
                        </TimelineDate>

                        {/* Title */}
                        <TimelineTitle className="font-bold text-sm sm:text-md">
                            {item.title}
                        </TimelineTitle>

                        <TimelineIndicator />

                    </TimelineHeader>

                    {/* Description */}
                    <TimelineContent className="text-sm sm:text-base text-justify leading-relaxed">
                        {item.description}
                    </TimelineContent>

                </TimelineItem>
            ))}

        </Timeline>
    )
}