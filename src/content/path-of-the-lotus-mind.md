
## How It Works

1. Create a character and enter the main screen.
2. Choose the desired focus duration and start a cultivation session.
3. During the session, the character meditates while a countdown timer runs.
4. Completing a session grants EXP and rewards.
5. EXP helps the character level up, while special orbs are used to break through to the next realm.
6. Users can review completed sessions in History and check collected rewards in Inventory.

### Cultivation Realms

The application currently includes five realms:

- Qi Condensation
- Foundation Building
- Core Formation
- Nascent Soul
- Spirit Transformation

Each realm requires a specific amount of EXP and, where applicable, certain orbs to complete a breakthrough.

## Demo Screens

| | | |
| :-: | :-: | :-: |
| ![Demo screen 1](/lotus/1.png) | ![Demo screen 2](/lotus/2.png) | ![Demo screen 3](/lotus/3.png) |
| ![Demo screen 4](/lotus/4.png) | ![Demo screen 5](/lotus/5.png) | ![Demo screen 6](/lotus/6.png) |
| ![Demo screen 7](/lotus/7.png) | ![Demo screen 8](/lotus/8.png) | ![Demo screen 9](/lotus/9.png) |
| ![Demo screen 10](/lotus/10.png) | ![Demo screen 11](/lotus/11.png) | ![Demo screen 12](/lotus/12.png) |
| ![Demo screen 14](/lotus/14.png) | ![Demo screen 15](/lotus/15.png) | ![Demo screen 16](/lotus/16.png) |

## Tech Stack

- Kotlin
- Jetpack Compose
- MVVM-based architecture
- Room Database
- Kotlin Coroutines and StateFlow
- Navigation Compose

## How to Run

### Prerequisites

- Android Studio
- Android SDK
- An Android emulator or physical Android device

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Open the project in Android Studio.
3. Allow Gradle to sync and download the required dependencies.
4. Select an emulator or connect an Android device.
5. Click **Run** or execute:

   ```bash
   ./gradlew installDebug
   ```

6. Launch the application on the device.

## Project Structure

The project follows a layered architecture:

```text
ui/
 ├── screen/
 └── navigation/

domain/
 ├── usecase/
 └── rules/

data/
 ├── local/
 ├── repository/
 └── entity/
```