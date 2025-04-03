import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info } from "lucide-react"

export function Components() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Components</h2>
        <p className="text-muted-foreground mt-2">Reusable components used throughout the Lift Card app.</p>
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Component Library</AlertTitle>
        <AlertDescription>
          All components are documented in Storybook. Run <code>npm run storybook</code> to view the component library.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="ui">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="ui">UI Components</TabsTrigger>
          <TabsTrigger value="cards">Card Components</TabsTrigger>
          <TabsTrigger value="forms">Form Components</TabsTrigger>
          <TabsTrigger value="layout">Layout Components</TabsTrigger>
        </TabsList>

        <TabsContent value="ui" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Common UI Components</CardTitle>
              <CardDescription>Basic UI building blocks used throughout the app</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Button</h4>
                  <p className="text-sm text-muted-foreground">Primary action component with multiple variants</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/common/Button/Button.tsx
                  </code>
                  <div className="text-xs text-muted-foreground mt-1">
                    Variants: primary, secondary, outline, ghost, link
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Icon</h4>
                  <p className="text-sm text-muted-foreground">SVG icon component with standardized sizing</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">src/components/common/Icon/Icon.tsx</code>
                  <div className="text-xs text-muted-foreground mt-1">Sizes: small, medium, large</div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Text</h4>
                  <p className="text-sm text-muted-foreground">Typography component with predefined styles</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">src/components/common/Text/Text.tsx</code>
                  <div className="text-xs text-muted-foreground mt-1">Variants: h1, h2, h3, body, caption, label</div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Avatar</h4>
                  <p className="text-sm text-muted-foreground">User avatar component with image or initials</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/common/Avatar/Avatar.tsx
                  </code>
                  <div className="text-xs text-muted-foreground mt-1">Sizes: small, medium, large</div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Badge</h4>
                  <p className="text-sm text-muted-foreground">Status indicator component</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/common/Badge/Badge.tsx
                  </code>
                  <div className="text-xs text-muted-foreground mt-1">Variants: success, warning, error, info</div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Spinner</h4>
                  <p className="text-sm text-muted-foreground">Loading indicator component</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/common/Spinner/Spinner.tsx
                  </code>
                  <div className="text-xs text-muted-foreground mt-1">Sizes: small, medium, large</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Components</CardTitle>
              <CardDescription>Components specific to card management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">CardItem</h4>
                  <p className="text-sm text-muted-foreground">Displays a card in a list with basic info</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/cards/CardItem/CardItem.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">CardDetail</h4>
                  <p className="text-sm text-muted-foreground">Displays detailed card information</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/cards/CardDetail/CardDetail.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">CardForm</h4>
                  <p className="text-sm text-muted-foreground">Form for adding or editing a card</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/cards/CardForm/CardForm.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">CardList</h4>
                  <p className="text-sm text-muted-foreground">Displays a list of cards with filtering</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/cards/CardList/CardList.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">CardStats</h4>
                  <p className="text-sm text-muted-foreground">Displays card usage statistics</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/cards/CardStats/CardStats.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">CardActions</h4>
                  <p className="text-sm text-muted-foreground">Action buttons for card management</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/cards/CardActions/CardActions.tsx
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forms" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Form Components</CardTitle>
              <CardDescription>Components for user input and forms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Input</h4>
                  <p className="text-sm text-muted-foreground">Text input component with validation</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">src/components/forms/Input/Input.tsx</code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Select</h4>
                  <p className="text-sm text-muted-foreground">Dropdown selection component with search</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/forms/Select/Select.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Checkbox</h4>
                  <p className="text-sm text-muted-foreground">Checkbox input component</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/forms/Checkbox/Checkbox.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">RadioGroup</h4>
                  <p className="text-sm text-muted-foreground">Radio button group component</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/forms/RadioGroup/RadioGroup.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">DatePicker</h4>
                  <p className="text-sm text-muted-foreground">Date selection component</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/forms/DatePicker/DatePicker.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Form</h4>
                  <p className="text-sm text-muted-foreground">Form container with validation</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">src/components/forms/Form/Form.tsx</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="layout" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Layout Components</CardTitle>
              <CardDescription>Components for page structure and layout</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Screen</h4>
                  <p className="text-sm text-muted-foreground">Base screen component with safe areas</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/layout/Screen/Screen.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Header</h4>
                  <p className="text-sm text-muted-foreground">Screen header with title and actions</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/layout/Header/Header.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">TabBar</h4>
                  <p className="text-sm text-muted-foreground">Bottom tab navigation bar</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/layout/TabBar/TabBar.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Modal</h4>
                  <p className="text-sm text-muted-foreground">Modal dialog component</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/layout/Modal/Modal.tsx
                  </code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Card</h4>
                  <p className="text-sm text-muted-foreground">Container with elevation and rounded corners</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">src/components/layout/Card/Card.tsx</code>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Divider</h4>
                  <p className="text-sm text-muted-foreground">Horizontal or vertical divider line</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded block">
                    src/components/layout/Divider/Divider.tsx
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

