---
title: "Element"
image: "images/element.jpg"
layout: "element"
draft: false
---

# Elements
A paragraph looks like this — Globally incubate standards compliant channels before scalable benefits. Quickly
disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar
catalysts for change before vertical architectures. Credibly reintermediate backend ideas for cross-platform
models. Continually reintermediate integrated processes through technically sound intellectual capital.
Holistically foster superior methodologies.

<hr>
 
 ### Heading example :
 # Heading 1
 ## Heading 2
 ### Heading 3
 #### Heading 4
 ##### Heading 5
 ###### Heading 6

 <hr>

 ### Emphasis :
 **Bold text.**

 Normal weight text.

*Italic text.* _Italic text._

<u>This text has a line underneath it.</u>

~~This text has a line underneath it~~
<hr>


### Button :
{{< button "Button Primary" "#!" >}} 
<hr>

### Paragraph
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
ipsum dolor sit amet, consetetur sadipscing elitr.
<hr>

### Ordered list example:
1. Poutine drinking vinegar bitters
2. Coloring book distillery fanny pack
3. List item
4. List item
5. List item

<hr>

### Unordered list example:
* Poutine drinking vinegar bitter
* Coloring book distillery fanny pac
* List item
* List item
* List item
<hr>

### Quotes
#### A quote looks like this:

>  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
ipsum dolor sit amet, consetetur sadipscing elitr,
<hr>


### Notice :

{{< notice "note" >}}
  This is a simple note.
{{< /notice >}}

{{< notice "tip" >}}
  This is a simple tip.
{{< /notice >}}

{{< notice "info" >}}
  This is a simple info.
{{< /notice >}}

{{< notice "warning" >}}
  This is a simple warning.
{{< /notice >}}
<hr>


### Tab: 
{{< tabs >}}
 {{< tab "first" >}}
 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  {{< /tab >}}

  {{< tab "second" >}}
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br> <br> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  {{< /tab >}}

  {{< tab "third" >}}
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.<br> <br>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
  {{< /tab >}}

{{< /tabs >}}
<hr>




### Table :
| #           | First             | Last              | Handle  |
| :-----------: | :-------------:     |:-------------:    | :-----:|
| **1**      | Row:1 Cell:1      | Row:1 Cell:2      | Row:1 Cell:3 |
| **2**      | Row:2 Cell:1      | Row:2 Cell:2      |   Row:2 Cell:3 |
| **3**      | Row:3 Cell:1      | Row:3 Cell:2      |    Row:3 Cell:3 |
<hr>

### Collapse :
{{< collapse "collapse 1" >}}
  This is a simple collapse
{{< /collapse >}}

{{< collapse "collapse 2" >}}
  This is a simple collapse
{{< /collapse >}}

{{< collapse "collapse 3" >}}
  This is a simple collapse
{{< /collapse >}}
<hr>

### Code and Syntax Highlighting :

```javascript
var s = "JavaScript syntax highlighting";
const plukDeop = key => obj => key.split
const compose = key => obj => key.split
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
<hr>


### Images
{{< image class="img-fluid rounded-6" title="image" src="/images/01.jpg" alt="element">}}
