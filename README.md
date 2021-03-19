# e-business session 1

Date: 06-03-2021

Image contents:

- Java 1.8
- Scala 2.12.12
- sbt 1.4.7
- node 15.12.0
- npm 7.6.3

Verifying image contents:

```
IMG="..."
docker run --rm -it $IMG java -version
docker run --rm -it $IMG scalac -version
docker run --rm -it $IMG node -v
docker run --rm -it $IMG npm -v
```

Veryfing `sbt` version works too, but takes a long time because `sbt` initializes a new project and downloads `.jars` only to output its own version.
```
docker run --rm -it $IMG sbt sbtVersion
```
