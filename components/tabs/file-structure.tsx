import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileTree, FileTreeNode } from "@/components/ui/file-tree"

export function FileStructure() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">File Structure</h2>
        <p className="text-muted-foreground mt-2">
          Understanding the file organization of the Lift Card app will help you navigate the codebase more efficiently.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Structure Overview</CardTitle>
          <CardDescription>
            The app follows a feature-based organization with shared components and services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileTree>
            <FileTreeNode name="src" type="directory">
              <FileTreeNode name="assets" type="directory">
                <FileTreeNode name="images" type="directory" />
                <FileTreeNode name="fonts" type="directory" />
                <FileTreeNode name="animations" type="directory" />
              </FileTreeNode>
              <FileTreeNode name="components" type="directory">
                <FileTreeNode name="common" type="directory" />
                <FileTreeNode name="cards" type="directory" />
                <FileTreeNode name="auth" type="directory" />
                <FileTreeNode name="profile" type="directory" />
              </FileTreeNode>
              <FileTreeNode name="features" type="directory">
                <FileTreeNode name="auth" type="directory" />
                <FileTreeNode name="cards" type="directory" />
                <FileTreeNode name="payments" type="directory" />
                <FileTreeNode name="profile" type="directory" />
                <FileTreeNode name="settings" type="directory" />
              </FileTreeNode>
              <FileTreeNode name="navigation" type="directory">
                <FileTreeNode name="AppNavigator.tsx" type="file" />
                <FileTreeNode name="AuthNavigator.tsx" type="file" />
                <FileTreeNode name="MainNavigator.tsx" type="file" />
                <FileTreeNode name="types.ts" type="file" />
              </FileTreeNode>
              <FileTreeNode name="screens" type="directory">
                <FileTreeNode name="auth" type="directory" />
                <FileTreeNode name="cards" type="directory" />
                <FileTreeNode name="payments" type="directory" />
                <FileTreeNode name="profile" type="directory" />
                <FileTreeNode name="settings" type="directory" />
              </FileTreeNode>
              <FileTreeNode name="services" type="directory">
                <FileTreeNode name="api" type="directory" />
                <FileTreeNode name="firebase" type="directory" />
                <FileTreeNode name="storage" type="directory" />
                <FileTreeNode name="analytics" type="directory" />
              </FileTreeNode>
              <FileTreeNode name="store" type="directory">
                <FileTreeNode name="slices" type="directory" />
                <FileTreeNode name="middleware" type="directory" />
                <FileTreeNode name="selectors" type="directory" />
                <FileTreeNode name="index.ts" type="file" />
              </FileTreeNode>
              <FileTreeNode name="types" type="directory" />
              <FileTreeNode name="utils" type="directory" />
              <FileTreeNode name="App.tsx" type="file" />
              <FileTreeNode name="index.js" type="file" />
            </FileTreeNode>
            <FileTreeNode name="ios" type="directory">
              <FileTreeNode name="LiftCard" type="directory" />
              <FileTreeNode name="Pods" type="directory" />
            </FileTreeNode>
            <FileTreeNode name="android" type="directory" />
            <FileTreeNode name="package.json" type="file" />
            <FileTreeNode name="tsconfig.json" type="file" />
          </FileTree>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="screens">
          <AccordionTrigger>Screens to Files Mapping</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Authentication Screens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Login Screen</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">src/screens/auth/LoginScreen.tsx</code>
                    </li>
                    <li className="flex justify-between">
                      <span>Registration Screen</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">src/screens/auth/RegisterScreen.tsx</code>
                    </li>
                    <li className="flex justify-between">
                      <span>Forgot Password</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/auth/ForgotPasswordScreen.tsx
                      </code>
                    </li>
                    <li className="flex justify-between">
                      <span>Verification</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/auth/VerificationScreen.tsx
                      </code>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Card Management Screens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Card Dashboard</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/cards/CardDashboardScreen.tsx
                      </code>
                    </li>
                    <li className="flex justify-between">
                      <span>Card Details</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/cards/CardDetailsScreen.tsx
                      </code>
                    </li>
                    <li className="flex justify-between">
                      <span>Add New Card</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">src/screens/cards/AddCardScreen.tsx</code>
                    </li>
                    <li className="flex justify-between">
                      <span>Card Settings</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/cards/CardSettingsScreen.tsx
                      </code>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Screens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Payment History</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/payments/PaymentHistoryScreen.tsx
                      </code>
                    </li>
                    <li className="flex justify-between">
                      <span>Make Payment</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/payments/MakePaymentScreen.tsx
                      </code>
                    </li>
                    <li className="flex justify-between">
                      <span>Payment Confirmation</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/payments/PaymentConfirmationScreen.tsx
                      </code>
                    </li>
                    <li className="flex justify-between">
                      <span>Payment Methods</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/payments/PaymentMethodsScreen.tsx
                      </code>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Profile Screens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>User Profile</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">src/screens/profile/ProfileScreen.tsx</code>
                    </li>
                    <li className="flex justify-between">
                      <span>Edit Profile</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/profile/EditProfileScreen.tsx
                      </code>
                    </li>
                    <li className="flex justify-between">
                      <span>Notifications</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/profile/NotificationsScreen.tsx
                      </code>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Settings Screens</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>App Settings</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/settings/SettingsScreen.tsx
                      </code>
                    </li>
                    <li className="flex justify-between">
                      <span>Security Settings</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/settings/SecuritySettingsScreen.tsx
                      </code>
                    </li>
                    <li className="flex justify-between">
                      <span>Preferences</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">
                        src/screens/settings/PreferencesScreen.tsx
                      </code>
                    </li>
                    <li className="flex justify-between">
                      <span>Help & Support</span>
                      <code className="text-sm bg-muted px-2 py-1 rounded">src/screens/settings/SupportScreen.tsx</code>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="navigation">
          <AccordionTrigger>Navigation Structure</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Navigation Structure</CardTitle>
                  <CardDescription>How screens are organized in the navigation hierarchy</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-semibold">AppNavigator (Root)</div>
                      <p className="text-sm text-muted-foreground">
                        The root navigator that handles authentication state
                      </p>
                      <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                        src/navigation/AppNavigator.tsx
                      </code>
                    </li>
                    <li>
                      <div className="font-semibold">AuthNavigator</div>
                      <p className="text-sm text-muted-foreground">Stack navigator for authentication screens</p>
                      <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                        src/navigation/AuthNavigator.tsx
                      </code>
                    </li>
                    <li>
                      <div className="font-semibold">MainNavigator</div>
                      <p className="text-sm text-muted-foreground">Tab navigator for main app screens</p>
                      <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                        src/navigation/MainNavigator.tsx
                      </code>
                    </li>
                    <li>
                      <div className="font-semibold">CardNavigator</div>
                      <p className="text-sm text-muted-foreground">Stack navigator for card-related screens</p>
                      <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                        src/navigation/CardNavigator.tsx
                      </code>
                    </li>
                    <li>
                      <div className="font-semibold">ProfileNavigator</div>
                      <p className="text-sm text-muted-foreground">Stack navigator for profile-related screens</p>
                      <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                        src/navigation/ProfileNavigator.tsx
                      </code>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Screen Routes</CardTitle>
                  <CardDescription>Route names used for navigation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Auth Routes</h4>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">Login</code>
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">Register</code>
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">ForgotPassword</code>
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">Verification</code>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold">Main Tab Routes</h4>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">Home</code>
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">Cards</code>
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">Payments</code>
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">Profile</code>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold">Card Routes</h4>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">CardDashboard</code>
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">CardDetails</code>
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">AddCard</code>
                        </li>
                        <li>
                          <code className="text-sm bg-muted px-2 py-0.5 rounded">CardSettings</code>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="redux">
          <AccordionTrigger>Redux Store Structure</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Redux Slices</CardTitle>
                  <CardDescription>Feature-based state organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <div className="font-semibold">Auth Slice</div>
                      <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                        src/store/slices/authSlice.ts
                      </code>
                      <p className="text-sm text-muted-foreground mt-1">
                        Manages authentication state, user info, and tokens
                      </p>
                    </li>
                    <li>
                      <div className="font-semibold">Cards Slice</div>
                      <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                        src/store/slices/cardsSlice.ts
                      </code>
                      <p className="text-sm text-muted-foreground mt-1">
                        Manages user's cards, card details, and card status
                      </p>
                    </li>
                    <li>
                      <div className="font-semibold">Payments Slice</div>
                      <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                        src/store/slices/paymentsSlice.ts
                      </code>
                      <p className="text-sm text-muted-foreground mt-1">
                        Manages payment history, methods, and transactions
                      </p>
                    </li>
                    <li>
                      <div className="font-semibold">UI Slice</div>
                      <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">src/store/slices/uiSlice.ts</code>
                      <p className="text-sm text-muted-foreground mt-1">
                        Manages UI state like loading, modals, and theme
                      </p>
                    </li>
                    <li>
                      <div className="font-semibold">Notifications Slice</div>
                      <code className="text-xs bg-muted px-2 py-1 rounded block mt-1">
                        src/store/slices/notificationsSlice.ts
                      </code>
                      <p className="text-sm text-muted-foreground mt-1">Manages user notifications and preferences</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

