// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CheckoutSheetAndroid",
    platforms: [.iOS(.v13)],
    products: [
        .library(
            name: "CheckoutSheetAndroid",
            targets: ["CheckoutSheetAndroidPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", branch: "main")
    ],
    targets: [
        .target(
            name: "CheckoutSheetAndroidPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/CheckoutSheetAndroidPlugin"),
        .testTarget(
            name: "CheckoutSheetAndroidPluginTests",
            dependencies: ["CheckoutSheetAndroidPlugin"],
            path: "ios/Tests/CheckoutSheetAndroidPluginTests")
    ]
)