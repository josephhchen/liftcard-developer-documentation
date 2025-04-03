import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Info } from "lucide-react"

export function CodebaseBasics() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Codebase Basics</h2>
        <p className="text-muted-foreground mt-2">Core concepts and patterns used throughout the Lift Card codebase.</p>
      </div>

      <Tabs defaultValue="architecture">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="architecture">Architecture</TabsTrigger>
          <TabsTrigger value="patterns">Design Patterns</TabsTrigger>
          <TabsTrigger value="styling">Styling</TabsTrigger>
          <TabsTrigger value="testing">Testing</TabsTrigger>
        </TabsList>

        <TabsContent value="architecture" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Application Architecture</CardTitle>
              <CardDescription>
                Lift Card follows a feature-based architecture with clear separation of concerns
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Core Principles</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-medium">Feature-based organization</span>
                    <p className="text-sm text-muted-foreground">Code is organized by feature rather than by type</p>
                  </li>
                  <li>
                    <span className="font-medium">Separation of concerns</span>
                    <p className="text-sm text-muted-foreground">UI, business logic, and data access are separated</p>
                  </li>
                  <li>
                    <span className="font-medium">Unidirectional data flow</span>
                    <p className="text-sm text-muted-foreground">Data flows from Redux store to components</p>
                  </li>
                  <li>
                    <span className="font-medium">Reusable components</span>
                    <p className="text-sm text-muted-foreground">
                      Components are designed to be reusable across features
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Layer Structure</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-medium">Presentation Layer</span>
                    <p className="text-sm text-muted-foreground">Screens and components that render the UI</p>
                  </li>
                  <li>
                    <span className="font-medium">Business Logic Layer</span>
                    <p className="text-sm text-muted-foreground">Redux slices, thunks, and feature-specific logic</p>
                  </li>
                  <li>
                    <span className="font-medium">Data Access Layer</span>
                    <p className="text-sm text-muted-foreground">
                      API services, Firebase integration, and local storage
                    </p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Architecture Diagram</AlertTitle>
            <AlertDescription>
              You can find a detailed architecture diagram in the project's Figma design file.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="patterns" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Common Design Patterns</CardTitle>
              <CardDescription>Patterns used throughout the codebase to solve common problems</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Component Patterns</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-medium">Container/Presentational Pattern</span>
                    <p className="text-sm text-muted-foreground">
                      Containers handle data and logic, presentational components handle UI
                    </p>
                    <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                      src/features/cards/containers/CardListContainer.tsx
                    </code>
                    <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                      src/components/cards/CardList.tsx
                    </code>
                  </li>
                  <li>
                    <span className="font-medium">Higher-Order Components (HOCs)</span>
                    <p className="text-sm text-muted-foreground">
                      Used for cross-cutting concerns like authentication and analytics
                    </p>
                    <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                      src/hocs/withAuthentication.tsx
                    </code>
                  </li>
                  <li>
                    <span className="font-medium">Custom Hooks</span>
                    <p className="text-sm text-muted-foreground">Reusable logic extracted into hooks</p>
                    <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">src/hooks/useCards.ts</code>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">State Management Patterns</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-medium">Redux Toolkit Slices</span>
                    <p className="text-sm text-muted-foreground">
                      Feature-based state organization with reducers and actions
                    </p>
                  </li>
                  <li>
                    <span className="font-medium">Thunks for Async Operations</span>
                    <p className="text-sm text-muted-foreground">Async logic is handled with Redux Thunks</p>
                  </li>
                  <li>
                    <span className="font-medium">Selectors for Derived State</span>
                    <p className="text-sm text-muted-foreground">Memoized selectors for computing derived state</p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="styling" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Styling Approach</CardTitle>
              <CardDescription>How UI components are styled in the Lift Card app</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Styling Technologies</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-medium">Styled Components</span>
                    <p className="text-sm text-muted-foreground">Primary styling method for React Native components</p>
                    <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                      src/components/common/Button/styles.ts
                    </code>
                  </li>
                  <li>
                    <span className="font-medium">Theme Provider</span>
                    <p className="text-sm text-muted-foreground">Global theme with colors, typography, and spacing</p>
                    <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">src/theme/index.ts</code>
                  </li>
                  <li>
                    <span className="font-medium">SwiftUI Styling</span>
                    <p className="text-sm text-muted-foreground">Native styling for iOS-specific components</p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Theme Structure</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-medium">Colors</span>
                    <p className="text-sm text-muted-foreground">Primary, secondary, accent, and semantic colors</p>
                  </li>
                  <li>
                    <span className="font-medium">Typography</span>
                    <p className="text-sm text-muted-foreground">Font families, sizes, and weights</p>
                  </li>
                  <li>
                    <span className="font-medium">Spacing</span>
                    <p className="text-sm text-muted-foreground">Consistent spacing scale</p>
                  </li>
                  <li>
                    <span className="font-medium">Shadows</span>
                    <p className="text-sm text-muted-foreground">Elevation levels for components</p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Design System</AlertTitle>
            <AlertDescription>
              The complete design system is available in Figma. Ask for access if you don't have it already.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="testing" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Testing Strategy</CardTitle>
              <CardDescription>How the Lift Card app is tested</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Testing Levels</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-medium">Unit Tests</span>
                    <p className="text-sm text-muted-foreground">Testing individual functions, components, and hooks</p>
                    <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                      src/components/common/Button/Button.test.tsx
                    </code>
                  </li>
                  <li>
                    <span className="font-medium">Integration Tests</span>
                    <p className="text-sm text-muted-foreground">
                      Testing interactions between components and services
                    </p>
                    <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                      src/features/cards/tests/CardList.test.tsx
                    </code>
                  </li>
                  <li>
                    <span className="font-medium">E2E Tests</span>
                    <p className="text-sm text-muted-foreground">Testing complete user flows</p>
                    <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">e2e/addCard.spec.js</code>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Testing Tools</h4>
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>
                    <span className="font-medium">Jest</span>
                    <p className="text-sm text-muted-foreground">Test runner and assertion library</p>
                  </li>
                  <li>
                    <span className="font-medium">React Native Testing Library</span>
                    <p className="text-sm text-muted-foreground">Testing React Native components</p>
                  </li>
                  <li>
                    <span className="font-medium">Detox</span>
                    <p className="text-sm text-muted-foreground">E2E testing for React Native</p>
                  </li>
                  <li>
                    <span className="font-medium">Mock Service Worker</span>
                    <p className="text-sm text-muted-foreground">Mocking API requests</p>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

