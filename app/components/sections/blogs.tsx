import { ExpandableCard } from "@/components/ui/expandable-card"

export function Blogs() {
    return (
        <div className="max-w-7xl mx-auto px-4">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <ExpandableCard
                    title="How JioHotstar Handles Millions of Concurrent Users Without Crashing"
                    src="/JioHotstar.webp"
                    description="A breakdown of the system design that allows streaming platforms like JioHotstar to serve millions of users simultaneously."
                >
                    <p>Streaming platforms like JioHotstar face extreme traffic spikes during major live events such as IPL matches or World Cup finals, where millions of users attempt to watch the same stream simultaneously. To handle this scale, the platform relies heavily on Content Delivery Networks (CDNs) that distribute video content across geographically distributed edge servers, reducing latency and server load. Video streams are encoded into multiple bitrates and delivered using adaptive streaming protocols so that users with different internet speeds receive the optimal quality without buffering. Behind the scenes, load balancers distribute incoming traffic across multiple microservices responsible for authentication, streaming, analytics, and recommendations. Distributed caching systems and real-time monitoring help ensure that if one server or region fails, traffic is automatically rerouted, allowing the platform to maintain smooth streaming even under massive demand.</p>
                </ExpandableCard>

                <ExpandableCard
                    title="How Netflix-Style Video Streaming Works"
                    src="/netflix.webp"
                    description="Understanding the architecture behind large-scale video streaming platforms."
                >
                    <p>Modern video streaming platforms such as Netflix rely on a complex pipeline that begins with encoding raw video into multiple formats and resolutions. Each video is divided into small chunks that are delivered to users using protocols like HLS or MPEG-DASH, enabling adaptive bitrate streaming based on network conditions. Instead of serving content from a central server, streaming platforms use globally distributed CDNs that cache video segments closer to users, significantly reducing buffering and latency. When a user presses play, the client application continuously downloads small video segments while monitoring bandwidth to dynamically switch quality levels. This architecture ensures smooth playback even when internet speeds fluctuate. Additionally, platforms track viewing analytics and quality-of-experience metrics to optimize performance and maintain high reliability across millions of viewers worldwide.</p>
                </ExpandableCard>

                <ExpandableCard
                    title="System Design: Building a Real-Time Chat Application"
                    src="/chat.webp"
                    description="A deep dive into designing a scalable chat system like WhatsApp or Discord"
                >
                    <p>Designing a real-time chat system like WhatsApp or Discord requires an architecture capable of handling millions of concurrent connections with minimal latency. Unlike traditional HTTP-based systems, chat applications typically rely on WebSockets or persistent connections to enable instant bidirectional communication between clients and servers. Messages are first received by gateway servers and then routed through message queues to ensure reliable delivery even during traffic spikes. Databases store conversation history while caching systems help speed up message retrieval for active chats. Features such as message acknowledgments, delivery guarantees, and offline storage ensure that users receive messages even if they temporarily lose connectivity. To scale globally, the system distributes chat servers across regions while load balancers manage incoming connections efficiently.</p>
                </ExpandableCard>

                <ExpandableCard
                    title="How Recommendation Systems Work (Netflix, YouTube, Amazon)"
                    src="/yt.png"
                    description="Understanding the machine learning systems that power modern content recommendations."
                >
                    <p>Recommendation systems play a crucial role in keeping users engaged on platforms like Netflix, YouTube, and Amazon by suggesting relevant content based on user behavior. These systems analyze massive amounts of data including viewing history, clicks, ratings, and interaction patterns to predict what a user is likely to enjoy next. Collaborative filtering identifies patterns among users with similar preferences, while content-based filtering recommends items similar to what a user has previously consumed. Many modern systems combine these techniques into hybrid models powered by machine learning algorithms that continuously learn from new data. The recommendation pipeline typically includes data collection, model training, ranking algorithms, and real-time personalization to ensure that each user sees a highly tailored feed of content.</p>
                </ExpandableCard>

                <ExpandableCard
                    title="Designing a Global Notification System (Like Facebook or Slack)"
                    src="/slack.webp"
                    description="How platforms deliver billions of notifications reliably across devices in real time."
                >
                    <p>A global notification system must reliably deliver billions of notifications across web and mobile devices while maintaining low latency and high availability. Events such as new messages, mentions, or updates are first captured by backend services and sent into message queues that decouple event generation from delivery. Notification workers process these events and determine the appropriate delivery channels, such as push notifications, emails, or in-app alerts. Services like Firebase Cloud Messaging and Apple Push Notification Service are often used for mobile delivery. To prevent overwhelming users, systems implement prioritization, batching, and rate limiting strategies. Distributed infrastructure ensures that notifications are delivered quickly regardless of geographic location, while monitoring tools track delivery success and system health.</p>
                </ExpandableCard>

                <ExpandableCard
                    title="Designing Uber's Ride Matching System"
                    src="/uber.png"
                    description="How Uber matches millions of riders with drivers efficiently using geospatial indexing and real-time algorithms."
                >
                    <p>Uber’s ride matching system is designed to connect riders and drivers in real time with minimal waiting time. The system continuously tracks driver locations using GPS updates streamed from mobile devices and stores them using geospatial indexing techniques that enable efficient nearby searches. When a user requests a ride, the backend service identifies the closest available drivers and runs matching algorithms that consider factors such as distance, driver availability, and estimated arrival time. Once a driver accepts the request, the system manages route tracking, pricing calculations, and trip monitoring. To ensure low latency and reliability across cities worldwide, Uber distributes its infrastructure across multiple regions and uses real-time data processing systems to handle millions of location updates every second.</p>
                </ExpandableCard>

            </div>

        </div>
    )
}