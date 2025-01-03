here eas.json contains prod and dev environment

eas build -p android --profile dev ---> for dev build/apk
eas build -p android --profile prod ---> for prod aab

eas update --channel production --platform android --message "code check 12 in production"
