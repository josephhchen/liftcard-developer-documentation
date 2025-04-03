import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TechStack() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
        <p className="text-muted-foreground mt-2">
          Lift Card is built with a modern tech stack to ensure performance, reliability, and developer experience.
        </p>
      </div>

      <Tabs defaultValue="react-native">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="react-native">React Native</TabsTrigger>
          <TabsTrigger value="swift-ui">SwiftUI</TabsTrigger>
          <TabsTrigger value="typescript">TypeScript</TabsTrigger>
          <TabsTrigger value="redux">Redux</TabsTrigger>
          <TabsTrigger value="firebase">Firebase</TabsTrigger>
        </TabsList>

        <TabsContent value="react-native" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>React Native</CardTitle>
              <CardDescription>Cross-platform mobile framework</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                React Native is used for the majority of the app's UI and business logic. We use version 0.72.x which
                includes the new architecture improvements.
              </p>
              <h4 className="font-semibold">Key Libraries</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>react-navigation - For navigation between screens</li>
                <li>react-native-reanimated - For advanced animations</li>
                <li>react-native-gesture-handler - For handling gestures</li>
                <li>react-native-svg - For SVG support</li>
                <li>react-native-fast-image - For optimized image loading</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="swift-ui" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SwiftUI</CardTitle>
              <CardDescription>Native iOS UI framework</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                SwiftUI is used for iOS-specific features and components that require deep integration with the
                platform. We use native modules to bridge between React Native and SwiftUI.
              </p>
              <h4 className="font-semibold">Key Features</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Apple Pay integration</li>
                <li>iOS widgets</li>
                <li>App Clips</li>
                <li>Advanced animations</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="typescript" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>TypeScript</CardTitle>
              <CardDescription>Typed JavaScript</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                TypeScript is used throughout the codebase to provide type safety and improve developer experience. We
                use strict mode and enforce type checking in our CI pipeline.
              </p>
              <h4 className="font-semibold">Type Structure</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>types/ - Global type definitions</li>
                <li>Component-specific types are defined in the same file as the component</li>
                <li>API response types are defined in the API service files</li>
                <li>Redux state types are defined in the slice files</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="redux" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Redux</CardTitle>
              <CardDescription>State management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Redux is used for global state management. We use Redux Toolkit to reduce boilerplate and simplify
                common Redux patterns.
              </p>
              <h4 className="font-semibold">Key Concepts</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Slices - Feature-based state organization</li>
                <li>Thunks - For async operations</li>
                <li>Selectors - For derived state</li>
                <li>Middleware - For side effects</li>
              </ul>
              <p className="mt-2">
                The store is configured in <code>src/store/index.ts</code> and slices are defined in{" "}
                <code>src/store/slices/</code>.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="firebase" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Firebase</CardTitle>
              <CardDescription>Backend services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Firebase provides the backend infrastructure for Lift Card. We use multiple Firebase services to handle
                different aspects of the app.
              </p>
              <h4 className="font-semibold">Services Used</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Authentication - For user authentication</li>
                <li>Firestore - For database</li>
                <li>Storage - For file storage</li>
                <li>Functions - For serverless functions</li>
                <li>Messaging - For push notifications</li>
                <li>Analytics - For user analytics</li>
                <li>Crashlytics - For crash reporting</li>
              </ul>
              <p className="mt-2">
                Firebase services are initialized in <code>src/services/firebase/index.ts</code>.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

