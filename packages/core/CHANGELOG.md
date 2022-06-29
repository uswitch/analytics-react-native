## @uswitch/analytics-react-native-v1.0.0 (2022-06-29)


### ⚠ BREAKING CHANGES

* We've improved iOS support for non-Cocoapods users. You do not need to follow these steps if you are using Cocoapods.

### Migration instructions

- Remove `Analytics.framework` from your Xcode project
- Remove `Analytics.framework` from `Embedded Binaries`
- Follow [Current instructions](#current-instructions)

### Current instructions
* **client:** We've dropped the chained configuration for an object one instead. This will make Analytics blend even better with tools like Prettier.

Before:
```js
analytics
    .configure()
        .using(Mixpanel, GoogleAnalytics)
        .recordScreenViews()
        .trackAppLifecycleEvents()
        .trackAttributionData()
        .android()
            .flushInterval(60)
            .disableDevicedId()
        .ios()
            .trackAdvertising()
            .trackDeepLinks()
    .setup("writeKey")
    .then(() =>
        console.log('Analytics is ready')
    )
    .catch(err =>
        console.error('Something went wrong', err)
    )
```

Now:
```js
analytics
    .setup('writeKey', {
        using: [Mixpanel, GoogleAnalytics],
        recordScreenViews: true,
        trackAppLifecycleEvents: true,
        trackAttributionData: true,

        android: {
            flushInterval: 60,
            collectDeviceId: false
        },
        ios: {
            trackAdvertising: true,
            trackDeepLinks: true
        }
    })
    .then(() =>
        console.log('Analytics is ready')
    )
    .catch(err =>
        console.error('Something went wrong', err)
    )
```

### Features

* Add AdvertisingId Plugin ([#574](https://github.com/uswitch/analytics-react-native/issues/574)) ([9f47e67](https://github.com/uswitch/analytics-react-native/commit/9f47e67906c658519e13c022a19c3f4640622ad6))
* add analytics 2.0 ([#360](https://github.com/uswitch/analytics-react-native/issues/360)) ([829fc80](https://github.com/uswitch/analytics-react-native/commit/829fc80bc8c4f59fa99dadd25083efa422d577f0))
* add anonymousId logic to reset ([#475](https://github.com/uswitch/analytics-react-native/issues/475)) ([23baab4](https://github.com/uswitch/analytics-react-native/commit/23baab4ebd8c142d5837ac003874a9dc40f34b69))
* add deeplink referral application data ([#454](https://github.com/uswitch/analytics-react-native/issues/454)) ([dbfc267](https://github.com/uswitch/analytics-react-native/commit/dbfc2673d08e10de2f1a773e5572b5aae0536218))
* add reset to plugins ([#490](https://github.com/uswitch/analytics-react-native/issues/490)) ([686f73f](https://github.com/uswitch/analytics-react-native/commit/686f73fa708ff9fa12ca1e6e263cb597ab278de3))
* added destination metadata and internal timeline processing for destinatio plugins ([#477](https://github.com/uswitch/analytics-react-native/issues/477)) ([8b1df55](https://github.com/uswitch/analytics-react-native/commit/8b1df559ff7b605ec0e582dae8bf41bb41f51539))
* **android:** allow opt-out for new lifecycle methods ([#256](https://github.com/uswitch/analytics-react-native/issues/256)) ([8dbadad](https://github.com/uswitch/analytics-react-native/commit/8dbadad955199bf58e2490c110101a71696b20e9))
* **android:** allow passing integration options ([#184](https://github.com/uswitch/analytics-react-native/issues/184)) ([6845c67](https://github.com/uswitch/analytics-react-native/commit/6845c6742ea16c635aa142f2e43a5af22b66d925))
* **anonymousid:** add a method to retrieve the anonymousId ([988f382](https://github.com/uswitch/analytics-react-native/commit/988f38255663a4abea02e919cefe66fe13a2adee))
* **client:** use object-based configuration ([#7](https://github.com/uswitch/analytics-react-native/issues/7)) ([6a281f4](https://github.com/uswitch/analytics-react-native/commit/6a281f4abd6b7e2f8af05c1fa8353da61511be0b))
* **core:** add middlewares ([9aeafa3](https://github.com/uswitch/analytics-react-native/commit/9aeafa3abd4011628495d054e0cc56f8b802d4ef))
* **core:** add native configuration method ([19c4fae](https://github.com/uswitch/analytics-react-native/commit/19c4fae4ac5f8d8168c44183a626273d9254797a))
* **core:** export TypeScript public interfaces ([9978cd7](https://github.com/uswitch/analytics-react-native/commit/9978cd734e84a1daa6b37a795a86f7b79efc2e42))
* **core:** http proxying via setup configuration ([#202](https://github.com/uswitch/analytics-react-native/issues/202)) ([40a3f5a](https://github.com/uswitch/analytics-react-native/commit/40a3f5a81516a5fb025c743a9ce0c502050463d4))
* Create Client Proxy Option ([#570](https://github.com/uswitch/analytics-react-native/issues/570)) ([eaeb940](https://github.com/uswitch/analytics-react-native/commit/eaeb9400b6da77dfe7d2a19b918b2d6506697f2d))
* createClient "storePersistor" option ([#549](https://github.com/uswitch/analytics-react-native/issues/549)) ([4b70e99](https://github.com/uswitch/analytics-react-native/commit/4b70e99f4b70ae82ab557956a0c4db3a2cfa748e))
* **integrations:** allow setting integration options ([13b663e](https://github.com/uswitch/analytics-react-native/commit/13b663e8a09ede92254fd5893bfb26ec5a555b14))
* **ios:** make idfa for ios external to analytics ([#210](https://github.com/uswitch/analytics-react-native/issues/210)) ([35f96a0](https://github.com/uswitch/analytics-react-native/commit/35f96a059b566ee786a70317a03d74d549b1ced3))
* **ios:** set trackAdvertising=true by default on ios ([#82](https://github.com/uswitch/analytics-react-native/issues/82)) ([09e997b](https://github.com/uswitch/analytics-react-native/commit/09e997b22504edfa607eff308e22d5af8fe1f42e))
* new onContextLoad events and awaitable context updates ([#532](https://github.com/uswitch/analytics-react-native/issues/532)) ([4508ad4](https://github.com/uswitch/analytics-react-native/commit/4508ad48269885e6237a3a5da155891e2c2eae48)), closes [#524](https://github.com/uswitch/analytics-react-native/issues/524) [#527](https://github.com/uswitch/analytics-react-native/issues/527)
* plugins can now disable integrations by marking them as false in the event.integrations ([#496](https://github.com/uswitch/analytics-react-native/issues/496)) ([65c2371](https://github.com/uswitch/analytics-react-native/commit/65c237158cef2947dbfeec3a38a286cce8bdfb8a))
* replacing redux with sovran ([#422](https://github.com/uswitch/analytics-react-native/issues/422)) ([2d69cc1](https://github.com/uswitch/analytics-react-native/commit/2d69cc10919b937e11f95c458b40a26fc3fbb832))


### Bug Fixes

* add fix for deviceId on android builds ([#405](https://github.com/uswitch/analytics-react-native/issues/405)) ([92c1fc0](https://github.com/uswitch/analytics-react-native/commit/92c1fc08d6f52b70d6b66e6088468f2cd47b6da4))
* add override fix to ios modules ([#404](https://github.com/uswitch/analytics-react-native/issues/404)) ([8e47eb6](https://github.com/uswitch/analytics-react-native/commit/8e47eb680cfa93f99900f33b443301d5208b0218))
* **android:** bump android dependency ([#214](https://github.com/uswitch/analytics-react-native/issues/214)) ([acd0f2f](https://github.com/uswitch/analytics-react-native/commit/acd0f2f0dde6ac60a00a6cd593920782a40bc092))
* **android:** bump deps and fix config issues ([#298](https://github.com/uswitch/analytics-react-native/issues/298)) ([5a2ed9b](https://github.com/uswitch/analytics-react-native/commit/5a2ed9bb8b62b89c4ce557b76c7b98a91b309e27))
* **android:** defaultKotlinVersion ([#159](https://github.com/uswitch/analytics-react-native/issues/159)) ([54e90a3](https://github.com/uswitch/analytics-react-native/commit/54e90a3ddfffbccfe5cce675d7fca691ad8359ec))
* **android:** fix crash when promise resolves in debug mode ([#267](https://github.com/uswitch/analytics-react-native/issues/267)) ([a0e21d9](https://github.com/uswitch/analytics-react-native/commit/a0e21d963e8d7e7e1cf1c9adc3f6b3530ce0b7c4))
* **android:** fixed context not passing thru ([#147](https://github.com/uswitch/analytics-react-native/issues/147)) ([cb1b412](https://github.com/uswitch/analytics-react-native/commit/cb1b412d318b6278f2092e14d74d252a125ddaae))
* **android:** parse android specific options correctly ([#187](https://github.com/uswitch/analytics-react-native/issues/187)) ([49e4815](https://github.com/uswitch/analytics-react-native/commit/49e4815ebb320ca0828a81505973593cca0791f5))
* **android:** pull android tool versions from root project ([#12](https://github.com/uswitch/analytics-react-native/issues/12)) ([3f1eb3c](https://github.com/uswitch/analytics-react-native/commit/3f1eb3c17b913a42a0305c891db49204707a095c)), closes [/github.com/frostney/react-native-create-library/blob/master/templates/android.js#L28](https://github.com/uswitch//github.com/frostney/react-native-create-library/blob/master/templates/android.js/issues/L28)
* appsflyer attribution ([#547](https://github.com/uswitch/analytics-react-native/issues/547)) ([494df24](https://github.com/uswitch/analytics-react-native/commit/494df24dc57371374dcc7bfffb6a50accf8e16e7))
* **bridge:** fix duplicated analytics client improving errors ([#162](https://github.com/uswitch/analytics-react-native/issues/162)) ([28a981d](https://github.com/uswitch/analytics-react-native/commit/28a981dba2416461ba617ab16e40c4b1eece694d))
* **bridge:** fix p(r)omise typo ([#168](https://github.com/uswitch/analytics-react-native/issues/168)) ([d9794db](https://github.com/uswitch/analytics-react-native/commit/d9794dbb48787007cd52952606a5af2adb32c823))
* **bridge:** improve missing native module error ([#5](https://github.com/uswitch/analytics-react-native/issues/5)) ([0a03617](https://github.com/uswitch/analytics-react-native/commit/0a03617440e9f64f93a9632aa2da0de8bf4bf5b3))
* change React dependency to React-Core ([#254](https://github.com/uswitch/analytics-react-native/issues/254)) ([c51e689](https://github.com/uswitch/analytics-react-native/commit/c51e6895082dfe2b7b0789cf4d3825e2d477a8c5))
* **client:** copy package with version ([2c223dd](https://github.com/uswitch/analytics-react-native/commit/2c223dd5cde5dccf751dbbfba53c4ecfd593b57b))
* **config:** pass user-supplied context for analytics calls ([#188](https://github.com/uswitch/analytics-react-native/issues/188)) ([7429567](https://github.com/uswitch/analytics-react-native/commit/74295673172b8bc3665f66a7b1e981bd0b094f72))
* **context:** fix `context` `name` and `version` ([09f0b28](https://github.com/uswitch/analytics-react-native/commit/09f0b288bcd0838f9bc7afc023b932bfa1820b13))
* **core:** fix duplicate client error in dev mode ([#51](https://github.com/uswitch/analytics-react-native/issues/51)) ([cb66749](https://github.com/uswitch/analytics-react-native/commit/cb6674933539832aaca8ba1524294b2a6d3e3d86)), closes [#16](https://github.com/uswitch/analytics-react-native/issues/16) [#15](https://github.com/uswitch/analytics-react-native/issues/15)
* **core:** fix TypeScript typings ([fe7933c](https://github.com/uswitch/analytics-react-native/commit/fe7933c05c54a4337449c002779cc1f41676b1e4)), closes [#11](https://github.com/uswitch/analytics-react-native/issues/11)
* **core:** React-Native 0.59 Support ([#50](https://github.com/uswitch/analytics-react-native/issues/50)) ([a78c94e](https://github.com/uswitch/analytics-react-native/commit/a78c94ef04288575ebfe0ff28a11416bbd1a4b1e)), closes [#46](https://github.com/uswitch/analytics-react-native/issues/46) [#44](https://github.com/uswitch/analytics-react-native/issues/44)
* custom event integrations override support, refactor integration merge logic ([#379](https://github.com/uswitch/analytics-react-native/issues/379)) ([d0b8fbf](https://github.com/uswitch/analytics-react-native/commit/d0b8fbf9877aa402de678d420b68de559ab7efb1))
* deepmerge device context on update ([#543](https://github.com/uswitch/analytics-react-native/issues/543)) ([5878043](https://github.com/uswitch/analytics-react-native/commit/58780434143cbf7f6aec6f79aaddc30df62c0f40))
* don't call stringValue of strings ([#253](https://github.com/uswitch/analytics-react-native/issues/253)) ([226a9e4](https://github.com/uswitch/analytics-react-native/commit/226a9e4a5010b116d173da80ca1d335a5b7b01b9))
* fix bundle unbundled logic ([#521](https://github.com/uswitch/analytics-react-native/issues/521)) ([9e080b1](https://github.com/uswitch/analytics-react-native/commit/9e080b13d072ed7f8a9c6b6b48d37db683f97cad))
* fixes missing context in first launch event after install ([#451](https://github.com/uswitch/analytics-react-native/issues/451)) ([efb2805](https://github.com/uswitch/analytics-react-native/commit/efb2805bc45ccc9623bcac1de76b1a07c2728211))
* fixing scheduling of flush intervals ([#457](https://github.com/uswitch/analytics-react-native/issues/457)) ([1b86cfc](https://github.com/uswitch/analytics-react-native/commit/1b86cfca6e92f604408c5b58139da1038ba06733))
* format integration settings correctly in the event integrations ([9e7d62d](https://github.com/uswitch/analytics-react-native/commit/9e7d62d9ee81782a40250defd2f2abab0b33e0e8))
* generating a UUID for anonymousID initial value, refactor userId replacement ([#440](https://github.com/uswitch/analytics-react-native/issues/440)) ([ef297ee](https://github.com/uswitch/analytics-react-native/commit/ef297ee5dc6a0a394d5b14ee7f96ca05d78793e0))
* **ios:** bump ios dependency ([#217](https://github.com/uswitch/analytics-react-native/issues/217)) ([4848bbd](https://github.com/uswitch/analytics-react-native/commit/4848bbd555ab8fd8c30822c730a34e98ceb9bf8c))
* **ios:** fix `trackAppLifecycleEvents` ([50c4b09](https://github.com/uswitch/analytics-react-native/commit/50c4b094d2ecdcf5bfd45cfccde1a8dd76a84def))
* **ios:** fixes for building for newer rn ([#206](https://github.com/uswitch/analytics-react-native/issues/206)) ([ecce14c](https://github.com/uswitch/analytics-react-native/commit/ecce14c34eb598bef519611894335fc4dc094305))
* match identify and reset client methods arguments, add token to context ([#533](https://github.com/uswitch/analytics-react-native/issues/533)) ([f865d48](https://github.com/uswitch/analytics-react-native/commit/f865d480479be83e0fa2f52137928925c781d238))
* merge context to preserve plugin injected properties ([#487](https://github.com/uswitch/analytics-react-native/issues/487)) ([9586a7a](https://github.com/uswitch/analytics-react-native/commit/9586a7af84e667e32aa178a79f98569373cd2c57))
* **package:** missing repo info ([#268](https://github.com/uswitch/analytics-react-native/issues/268)) ([6a2a93b](https://github.com/uswitch/analytics-react-native/commit/6a2a93b10065834d43dca3d6809a8982a1a8bd2b))
* persist user traits across events ([#581](https://github.com/uswitch/analytics-react-native/issues/581)) ([d48ac83](https://github.com/uswitch/analytics-react-native/commit/d48ac834000a4a81524b30ec1e386f337d55adf2))
* prevent events mutating state on empty removes ([133b821](https://github.com/uswitch/analytics-react-native/commit/133b82117ce0cbd0ad2280867bda202bea35dab6))
* re-add logic for tracking lifecycle events ([#328](https://github.com/uswitch/analytics-react-native/issues/328)) ([92194f3](https://github.com/uswitch/analytics-react-native/commit/92194f388d35c1afc495c161b7b20b883c98a3dd))
* refactor getDeviceID to use DRM, remove AndroidID ([#567](https://github.com/uswitch/analytics-react-native/issues/567)) ([f2616aa](https://github.com/uswitch/analytics-react-native/commit/f2616aaf2fbfd76577368cf1dd3ab147d72f7c27))
* refactoring redux event subscriptions and locking upload ([#376](https://github.com/uswitch/analytics-react-native/issues/376)) ([a302215](https://github.com/uswitch/analytics-react-native/commit/a30221576f511d873bf8e7ae7399f79f918193f4))
* remove console.warning when sending events ([#413](https://github.com/uswitch/analytics-react-native/issues/413)) ([954ece1](https://github.com/uswitch/analytics-react-native/commit/954ece14ef6a76d98d7957e70d0038b47dcf6ea2))
* remove import cycle in DestinationMetadataEnrichment ([#505](https://github.com/uswitch/analytics-react-native/issues/505)) ([9d51d3f](https://github.com/uswitch/analytics-react-native/commit/9d51d3f2dec9afd10af0d7b4e8f0ba8ded93ef8f))
* reset anonymousId for users who have persisted incorrect value ([#445](https://github.com/uswitch/analytics-react-native/issues/445)) ([37aeb81](https://github.com/uswitch/analytics-react-native/commit/37aeb81d1bc017f511e70604a2992afca2cc17ae))
* setting minSDK to > 21 for Android and updating to sovran 0.2.2 ([#430](https://github.com/uswitch/analytics-react-native/issues/430)) ([4c6e977](https://github.com/uswitch/analytics-react-native/commit/4c6e9778ae4dbd4ef52eb583588d785556342d03))
* upgrade sovran to v0.2.3, move RN to peerDeps ([#437](https://github.com/uswitch/analytics-react-native/issues/437)) ([b76739a](https://github.com/uswitch/analytics-react-native/commit/b76739addc18fb1e4ec19e2a2a53e5ff207b7f2d))


* Improve iOS support for users without Cocoapods  (#27) ([e90a58c](https://github.com/uswitch/analytics-react-native/commit/e90a58c569854d6f2981a8545dae16ed485b4909)), closes [#27](https://github.com/uswitch/analytics-react-native/issues/27) [segmentio/analytics-ios#3](https://github.com/segmentio/analytics-ios/issues/3)

## [@segment/analytics-react-native-v2.3.1](https://github.com/segmentio/analytics-react-native/compare/@segment/analytics-react-native-v2.3.0...@segment/analytics-react-native-v2.3.1) (2022-06-24)


### Bug Fixes

* persist user traits across events ([#581](https://github.com/segmentio/analytics-react-native/issues/581)) ([d48ac83](https://github.com/segmentio/analytics-react-native/commit/d48ac834000a4a81524b30ec1e386f337d55adf2))
