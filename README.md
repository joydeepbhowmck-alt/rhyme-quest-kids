# Rhyme Quest Kids v4

## New in v4
- Dedicated **Browser Tester** screen at `/web-tester`
- Responsive web layout
- GitHub Pages deployment workflow for a live browser tester
- Improved app metadata/versioning
- Android AAB workflow retained
- 5,000 rhyme variations
- Animated cartoon scenes
- Narration
- Rewards
- Parent gate
- Favourites

## Run the browser tester locally
```bash
npm install
npx expo start --web
```
Then open the displayed Expo web address and navigate to:
`/web-tester`

## Create a live browser tester
Push this project to a GitHub repository. The `Deploy Rhyme Quest Kids Web Tester` workflow publishes the web build to GitHub Pages. The workflow's deployment environment exposes the resulting Pages URL.

## Android
Run `Build Rhyme Quest Kids v4 AAB` in GitHub Actions to generate the release AAB.

## Production note
For a commercial children's app, replace emoji characters with commissioned/original cartoon artwork and animations, use properly licensed/original audio, add child privacy/consent flows, and complete Google Play Families/policy review before launch.
