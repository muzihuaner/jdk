# 我应该使用哪个版本的 JDK？

<img src="logo.png" alt="我应该使用哪个版本的 JDK？" width="600" />

构建和运行 Java 应用程序需要实现 Java 平台标准版（“Java SE”）规范的 Java 编译器、Java 运行库和虚拟机。

[OpenJDK](https://openjdk.java.net) 是 Java SE 规范的开放源代码参考实现，但它仅是源代码。不同供应商为多个支持的平台提供二进制发行版。这些发行版在许可证、商业支持、支持的平台和更新频率方面有所不同。

本网站提供独立且具有个人观点的建议。


## TL;DR

✅ 推荐: 使用 [Adoptium Eclipse Temurin 21](#adoptium-eclipse-temurin)，并确保本地版本与 CI 和生产版本一致。 

## 发布版本

在当前的 [JDK 发布模式](https://openjdk.java.net/projects/jdk/) 下, 每六个月计划发布一个带有新主版本号的新特性版本，分别在 3 月和 9 月。此外，还有季度性错误修复更新。

每两年，九月份的发布将是一个长期支持（LTS）版本，该版本至少会更新三年。


| JDK 版本                                        | 类型    |  发布日期 | 突出特点         | 推荐方案                                                                                                                                                                                                                     |
|-----------------------------------------------------|---------|--------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [**8**](https://openjdk.java.net/projects/jdk8/)    | **LTS** | **03/2014**  | Lambdas            | Last LTS version under previous release model. Free updates by Oracle [ended](https://www.oracle.com/java/technologies/java-se-support-roadmap.html), but still maintained by others. Upgrade to 17 or 21 now! |
| [9](https://openjdk.java.net/projects/jdk9/)        | Feature | 09/2017	     | Modules            | New release model was introduced. EOL. Upgrade to 17 or 21 now!                                                                                                                                                                     |
| [10](https://openjdk.java.net/projects/jdk/10/)     | Feature | 03/2018	     | var                | EOL. Upgrade to 17 or 21 now!                                                                                                                                                                                                       |
| [**11**](https://openjdk.java.net/projects/jdk/11/) | **LTS** | **09/2018**	 | New HTTP Client    | Upgrade to 21 now!                                                                                                                                                          |
| [12](https://openjdk.java.net/projects/jdk/12/)     | Feature | 03/2019	     |                    | EOL. Upgrade to 21 now!                                                                                                                                                                                                             |
| [13](https://openjdk.java.net/projects/jdk/13/)     | Feature | 09/2019	     |                    | EOL. Upgrade to 21 now!                                                                                                                                                                                                             |
| [14](https://openjdk.java.net/projects/jdk/14/)     | Feature | 03/2020	     | Switch expressions | EOL. Upgrade to 21 now!                                                                                                                                                                                                             |
| [15](https://openjdk.java.net/projects/jdk/15/)     | Feature | 09/2020	     | Text blocks        | EOL. Upgrade to 21 now!                                                                                                                                                                                                             |
| [16](https://openjdk.java.net/projects/jdk/16/)     | Feature | 03/2021	     | Records            | EOL. Upgrade to 21 now!                                                                                                                                                                                                             |
| [**17**](https://openjdk.java.net/projects/jdk/17/) | **LTS** | **09/2021**	 | Sealed Classes     | **Supported LTS version.** Consider upgrading to 21 in the next months.                                                                                                                                                                                                             |
| [18](https://openjdk.java.net/projects/jdk/18/)     | Feature | 03/2022	     | [UTF-8 by Default](https://openjdk.java.net/jeps/400)   | EOL. Upgrade to 21 now!                                                                                                                                                            |
| [19](https://openjdk.java.net/projects/jdk/19/)     | Feature | 09/2022	     |                    | EOL. Upgrade to 21 now!                                                                                                                                                            |
| [20](https://openjdk.java.net/projects/jdk/20/)     | Feature | 03/2023	     |                    | EOL. Upgrade to 21 now!                                                                                                                                                            |
| [**21**](https://openjdk.java.net/projects/jdk/21/)     | **LTS** | **09/2023**	     | [Pattern Matching](https://wscp.dev/posts/tech/java-pattern-matching/), Virtual Threads                   | **Current LTS version.**                                                                                                                                                           |
| [22](https://openjdk.java.net/projects/jdk/22/)     | Feature | 03/2024	     |                     | Stick with 21.                                                                                                                                                            |
| [23](https://openjdk.java.net/projects/jdk/23/)     | Feature | 09/2024	     | [Markdown Documentation Comments](https://openjdk.org/jeps/467)                  | Stick with 21.                                                                                                                                                            |


您需要决定是想坚持使用最新的长期支持版本，还是选择使用最新的特性版本并每六个月进行一次升级。这两种选择都可以，但如果您不确定，请坚持使用最新的长期支持版本。

OpenJDK 项目本身在 [openjdk.java.net](https://openjdk.java.net) 上进行管理，您可以在那里找到规范、源代码和邮件列表，但那里没有可以下载的构建版本。您需要选择一个发行版。

## 发行版

- [OpenJDK builds by Oracle (jdk.java.net)](#openjdk-builds-by-oracle-jdkjavanet)
- [Oracle Java SE Development Kit (JDK)](#oracle-java-se-development-kit-jdk)
- [Adoptium Eclipse Temurin](#adoptium-eclipse-temurin)
- [AdoptOpenJDK](#adoptopenjdk)
- [Azul Zulu](#azul-zulu)
- [Azul Zing](#azul-zing)
- [BellSoft Liberica JDK](#bellsoft-liberica-jdk)
- [IBM Semeru Runtime](#ibm-semeru-runtime)
- [Amazon Corretto](#amazon-corretto)
- [Microsoft Build of OpenJDK](#microsoft-build-of-openjdk)
- [Alibaba Dragonwell](#alibaba-dragonwell)
- [SapMachine](#sapmachine)
- [Red Hat OpenJDK](#red-hat-openjdk)
- [GraalVM](#graalvm)


### OpenJDK builds by Oracle (jdk.java.net)

[网站](https://jdk.java.net) |
[Releases](https://jdk.java.net) |
Docker Images (n/a)

Oracle 为 Linux、macOS 和 Windows 提供 OpenJDK 构建版本，以压缩归档格式提供。

这些构建版本将在 6 个月的时间内进行更新。在此短暂期限之后，将不再提供更新和安全补丁。这也适用于 LTS 版本！例如，最新的
e.g., OpenJDK 11 构建版本是  [11.0.2+9](https://jdk.java.net/archive/) 而当前的 OpenJDK 版本是 [11.0.12+7](https://wiki.openjdk.java.net/display/JDKUpdates/JDK11u).

⛔️  建议：不要使用 Oracle 的 OpenJDK 构建，尤其是如果您打算坚持使用 LTS 版本。


### Oracle Java SE Development Kit (JDK)

[Website](https://www.oracle.com/java/) |
[Releases](https://www.oracle.com/java/technologies/downloads/archive/) |
Docker Images (n/a)

Oracle 提供基于 OpenJDK 的商业版本，这些版本与 OpenJDK 的源代码完全相同：Oracle Java SE 开发工具包（JDK）。Oracle 为这些构建提供定期更新和安全补丁。

这些构建的主要问题是 Oracle 的许可政策：

在版本 10 之前，构建是在 [Oracle Binary Code License Agreement](https://www.oracle.com/de/downloads/licenses/binary-code-license.html)下发布的, 这实际上允许构建用于商业项目。

从版本 11 到版本 16 的构建是在 [Oracle Technology Network License Agreement for Oracle Java SE](https://www.oracle.com/downloads/licenses/javase-license1.html),下发布的 Oracle Java SE，这需要付费许可才能在生产中使用。这就是为什么出现了许多新的 OpenJDK 发行版。

版本 17 是在 [Oracle No-Fee Terms and Conditions (NFTC)](https://www.oracle.com/downloads/licenses/no-fee-license.html), 下发布的，这允许使用构建来运行内部业务运营。不幸的是，“内部业务运营”这个短语没有定义，是一个非常模糊的短语（一个面向公众的网站是否属于内部业务运营？）。

此外，基于这种不稳定的许可历史，未来版本将如何许可是不可预测的。

⛔️ 建议：在咨询律师之前，不要使用 Oracle Java SE 开发工具包（JDK）。


### Adoptium Eclipse Temurin

[Website](https://adoptium.net) |
[Releases](https://adoptium.net/archive.html) |
[Docker Images](https://hub.docker.com/_/eclipse-temurin/)

Eclipse Adoptium 是 Eclipse 基金会的顶级项目，为开源软件提供资源和专业的治理模式。Adoptium 工作组由对 Java 技术有战略兴趣的主要公司和组织组成，包括 Red Hat、IBM、Microsoft、Azul 和 iJUG。前 AdoptOpenJDK 项目已迁移至 Eclipse Adoptium。

Adoptium OpenJDK 构建被称为 Eclipse Temurin，以区分该项目与构建。

Eclipse Temurin 构建是高质量的、供应商中立的，并在宽松许可下经过 TCK 测试。

Adoptium 表示，只要相应的上游源代码得到积极维护，它将继续构建 LTS 版本的二进制文件。

✅ 推荐方案：强烈推荐使用 Adoptium Eclipse Temurin OpenJDK 构建版本。


### AdoptOpenJDK

[Website](https://adoptopenjdk.net) |
[Releases](https://adoptopenjdk.net/archive.html?variant=openjdk11&jvmVariant=hotspot) |
[Docker Images](https://hub.docker.com/_/adoptopenjdk)

AdoptOpenJDK 项目是 Eclipse Adoptium 的前身，为默认 HotSpot 和 OpenJ9 虚拟机提供了高质量的 OpenJDK 构建。

网站和旧版本发布被保留在线上，以便访问存档版本。

⛔️  建议：不要再使用 AdoptOpenJDK。请使用 Adoptium Eclipse Temurin 代替。


### Azul Zulu

[Website](https://www.azul.com) |
[Releases](https://www.azul.com/downloads/?package=jdk#download-openjdk) |
[Docker Images](https://hub.docker.com/r/azul/zulu-openjdk)

Azul Zulu Builds of OpenJDK 是免费、生产就绪的开源、TCK 测试和认证的 OpenJDK 发行版。它们适用于广泛的硬件平台和操作系统，并兼容特殊要求，如精简的 JRE 和包括 OpenJFX 和协调检查点恢复（CRaC）在内的构建。

它们作为 Azul Platform Core 的一部分得到支持，该平台提供稳定的更新和安全补丁，以确保快速、可靠的部署到生产环境，并提供面向解决方案的工程支持。

这些构建的缺点是依赖于单一公司，该公司可能会突然更改其许可或更新策略。

✅ 推荐：Azul Zulu Builds of OpenJDK 是一个不错的选择。


### Azul Zing

[Website](https://www.azul.com) |
[Releases](https://www.azul.com/products/prime-roadmap/) |
[Docker Images](https://hub.docker.com/u/azul)

Azul Zing 的 OpenJDK 构建（Zing）是商业优化的 OpenJDK 构建，目前作为 Azul Platform Prime 进行市场推广。Zing 可用于评估，但生产使用需要与 Azul Systems 签订商业合同。

Zing 以 OpenJDK 为基础，并使用优化版本替换了几个关键组件。主要新增功能包括 C4 Pauseless 垃圾回收器（适用于所有主流 Java 版本，包括 Java 8 和 11 的唯一生产级暂停式垃圾回收器）、Falcon JIT 编译器（优化代码以提高吞吐量、降低响应延迟和增加承载能力）、ReadyNow 预热优化器（从应用程序的先前运行中学习，以便尽可能快地将应用程序加速到全速）、Azul 优化器中心（一个独立组件，将 JIT 编译从客户端机器卸载，并让 JVM 相互学习以尽可能快地达到最大速度）。

Zing 是适用于需要保证低中值延迟和最小延迟异常值、需要快速扩展和缩减并尽快处理流量的应用程序、以及大型 JVM 集群运行应用程序且基础设施成本成为问题的理想选择。

⚠️  建议：当遇到 GC 停顿时间、缓慢预热和大型本地基础设施或云成本问题时，请考虑使用 Azul Zing / Azul Platform Prime。在没有许可证的情况下，请勿在生产环境中使用。

### BellSoft Liberica JDK

[Website](https://bell-sw.com) |
[Releases](https://bell-sw.com/pages/downloads/?) |
[Docker Images](https://hub.docker.com/u/bellsoft)

与 Azul 类似，BellSoft 专注于专业 Java 技术和 JDK 的商业支持。BellSoft 在业界享有很高的声誉，并参与多个工作组以推动 Java 平台的发展。

BellSoft 为几乎所有操作系统和架构提供开源的 OpenJDK 构建，称为 Liberica JDK。

流行的 Spring Boot 框架选择了 Liberica JDK 作为其[构建包](https://github.com/paketo-buildpacks/bellsoft-liberica)的运行环境.

这些构建的缺点是依赖于单一公司，该公司可能会突然更改其许可或更新策略。

✅ 推荐：BellSoft Liberica JDK 构建是一个不错的选择。


### IBM Semeru Runtime

[Website](https://developer.ibm.com/languages/java/semeru-runtimes/) |
[Releases](https://developer.ibm.com/languages/java/semeru-runtimes/downloads/) |
Docker Images (n/a)

IBM 开发了自己的 Java 虚拟机版本，称为 J9，并将其开源为 Eclipse OpenJ9。它是默认 HotSpot Java 虚拟机的一个替代品，但从未获得太多人气。

IBM 现在提供基于 Eclipse OpenJ9 Java 虚拟机和一些 OpenJDK 类库的构建版本，称为 Semeru Runtime。OpenJ9[内存占用低，启动速度快，具有共享类](https://www.eclipse.org/openj9/performance/), 但与 Hotspot 虚拟机相比，吞吐量较低。

⚠️  推荐：仅当您知道需要 OpenJ9 虚拟机时才使用 IBM Semeru Runtime。


### Amazon Corretto

[Website](https://aws.amazon.com/corretto/) |
[Releases](https://aws.amazon.com/corretto/) |
[Docker Images](https://hub.docker.com/_/amazoncorretto)

由于 Oracle 更改了其 OpenJDK 构建的支持和许可政策，主要的云服务提供商决定建立自己的托管 OpenJDK 构建并提供长期更新。显然，这是为了避免风险，尤其是避免与 Oracle 的诉讼。

2018 年，AWS 发布了 Corretto，这是另一个 OpenJDK 构建版本。

AWS 包含了从较新 OpenJDK 版本中回滚的 bug 修复，并声称他们将会添加尚未集成到 OpenJDK 项目中的一些补丁。亚马逊实施了一个针对其服务进行了优化的替代加密提供者，计划将其作为 Corretto 中的默认加密实现。

亚马逊为主要的开发平台提供发行版，并为自己的亚马逊 Linux 2 提供优化版本。

✅  推荐：Corretto 构建是一个不错的选择，尤其是如果您在 AWS 上直接在亚马逊 Linux 2 上运行 Java 应用程序。


### Microsoft Build of OpenJDK

[Website](https://www.microsoft.com/openjdk) |
[Releases](https://docs.microsoft.com/en-us/java/openjdk/download) |
[Docker Images](https://docs.microsoft.com/en-us/java/openjdk/containers)

2021 年，微软发布了 Microsoft Build of OpenJDK，这是另一个 OpenJDK 构建版本。

微软可能会包含从较新版本的 OpenJDK 中回滚的 bug 修复，并声称他们可能会添加尚未集成到 OpenJDK 项目中的一些补丁。

微软为主要的开发平台提供发布版本。

⚠️ 建议：仅在您直接在 Azure 上运行 Java 应用程序时使用微软的 OpenJDK 构建版本。还有更多更成熟的选项可用。

### Alibaba Dragonwell

[Website](http://dragonwell-jdk.io) |
[Releases](http://dragonwell-jdk.io) |
[Docker Images](https://github.com/alibaba/dragonwell11/wiki/Use-Dragonwell-11-docker-images)

阿里巴巴提供了一种 OpenJDK 构建，其中包含向后移植和一些额外功能。

建议：除非你被政府强制，否则不要使用阿里巴巴。


### SapMachine

[Website](https://sap.github.io/SapMachine/) |
[Releases](https://github.com/SAP/SapMachine/releases) |
[Docker Images](https://hub.docker.com/_/sapmachine)

SapMachine 是另一个由 SAP 维护的 OpenJDK 构建。

建议：仅在您在 SAP 服务器上运行 Java 应用程序时使用 SapMachine。还有更多更成熟的选项可用。


### Red Hat OpenJDK

[Website](https://developers.redhat.com/products/openjdk/overview) |
[Releases](https://developers.redhat.com/products/openjdk/download) |
[Docker Images](https://catalog.redhat.com/software/containers/ubi8/openjdk-11/5dd6a4b45a13461646f677f4)

红帽公司为 LTS 版本提供 OpenJDK 构建。

⚠️ 推荐：仅在您直接在 Red Hat Enterprise Linux 上运行 Java 应用程序时使用 Red Hat OpenJDK。还有更多成熟的选项可供选择。


### ojdkbuild

[Website](https://github.com/ojdkbuild/ojdkbuild) |
[Releases](https://github.com/ojdkbuild/ojdkbuild/releases  ) |
Docker Images (n/a)

该项目已停止开发。ojdkbuild 项目的目标是提供尽可能接近 Linux OpenJDK 软件包的 Windows x86_64 二进制文件，例如，通过使用系统库而不是 zlib 或 OpenSSL 的打包版本。它使用了 CentOS 中的软件包。这些构建的使用案例是在 Windows 机器上开发 Java 软件，并在生产中将它们部署到 Linux 服务器上。

建议：不要使用 ojdkbuild，因为该项目已停止。


### GraalVM

[Website](https://www.graalvm.org) |
[Releases](https://github.com/graalvm/graalvm-ce-builds/releases) |
[Docker Images](https://github.com/graalvm/container/pkgs/container/graalvm-ce)

GraalVM 是一个完全符合 JDK 规范的 JDK，但与所有其他构建版本有很大不同。

GraalVM 是由 Oracle 开发的。它基于 OpenJDK，但包含一个新的高性能编译器和一个新的多语言虚拟机（可以执行用不同编程语言编写的代码）。还可以创建针对特定平台的本地可执行文件，这些文件高度优化且启动速度极快。

🤷 请 [分享](https://github.com/whichjdk/whichjdk.com/issues/6) 您在生产环境中使用 GraalVM 的经验，以便我们可以提供经过验证的建议。

## Special Cases

### Apple Silicon

macOS/AArch64 的官方支持是在 OpenJDK 17 版本中通过 [JEP 391](https://openjdk.java.net/jeps/391) 发布。

macOS x64 构建在 Rosetta 2 上运行稳定，但性能由于仿真而显著下降。在 Apple Silicon Mac（像我这样的人）上开发的人应该安装本地的 macOS AArch64（即 ARM 64）版本的 JDK。

大多数发行版只为 Java 17+提供 macOS/AArch64 构建
[BellSoft Liberica](https://bell-sw.com/announcements/2021/03/12/Liberica-on-Apple-Silicon/), Amazon Corretto, and [Azul Zulu](https://www.azul.com/newsroom/azul-announces-support-of-java-builds-of-openjdk-for-apple-silicon/) 提供 Java 8 和 Java 11 的免费 macOS/AArch64 构建。


## 问答

### 本地开发安装 JDK 最好的方式是什么？

使用 [SDKMAN!](https://sdkman.io/install)

要列出可用的 JDK，请输入
```
sdk list java
```

安装特定版本：

```
sdk install java 21.0.3-tem
```

通过检查版本来验证：

```
java --version
```


### 我目前安装了哪个版本的 Java

```
which java
`which java` --version
```

在 Linux 上，您还可以尝试
```
sudo update-java-alternatives
```

### JDK 和 JRE 之间的区别是什么？

一些发行版提供了 JDK（Java 开发工具包）和 JRE（Java 运行环境）构建。JDK 包含了编译、打包和运行 Java 应用程序所需的一切，而 JRE 只包含运行 Java 应用程序所需的二进制文件和库。JRE 是 JDK 的精简版，在兆字节大小上更小。

如果大小对您来说很重要，请考虑使用  [jlink](https://blog.adoptium.net/2021/10/jlink-to-produce-own-runtime/).创建自己的精简运行环境。

对于本地开发，你需要一个 JDK。在生产环境中，如果你只需要运行环境，使用 JDK 也可以。

### 关于 Java EE?

Java EE（Java 平台，企业版）已更名为 Jakarta EE。它是一个用于构建服务器应用程序和前端的应用程序规范。在使用上，Jakarta EE 可以与 [Spring Boot](https://spring.io/projects/spring-boot), [Micronaut](https://micronaut.io),  [Quarkus](https://quarkus.io),等现代框架相媲美，但 Jakarta EE 更复杂。

⚠️建议：不要基于 Jakarta EE 开始新的项目。大多数人使用 Spring Boot，这是一个不错的选择。如果你有强烈的 Java EE 背景，可以考虑 Quarkus。如果你喜欢 Groovy 和 Grails，可以考虑 Micronaut。


## About

本网站由 muzihuaner 汉化维护。本网站上所表达的建议或观点均为个人意见，基于长期的专业经验。作者与所列组织无关。

原项目 (https://github.com/whichjdk/whichjdk.com).

Java 和 OpenJDK 是 Oracle 及其附属公司的商标或注册商标。
