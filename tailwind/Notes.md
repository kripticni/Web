# Tailwind Specifies

## Philosophy

Tailwind is designed to work for mobile first
considering that most developers probably ignore
mobile looks when they develop on desktop.

## Sizing

Tailwind includes its own tailwind spacing
scale, allowing you to use classes with
specific names and specific sizes.

Tailwind sizes:

Integers means em units in multitudes of 0.25 em
example: w-4 means 1em.
Max being 96 units or 24em.

The auto word is also available setting
the size to auto.

w-px, setting the width to 1px.

Using decimals results in multitudes of 0.125 rem
they are decimals from 0.5 to 3.5 in steps of 0.5 

Using fractions results in sizes being set as %,
denominators from 2, 3, 4, 5, 6 and 12.
w-11/12 would end up being 91%.

w-full sets width as 100%.

w-screen sets as 100vw. (viewport width)

w-min as min-content.
w-max as max-content.

(an EM being the relative size of its
parent element in precentages)

# Element Sizes

Allows for any class along with its
size, for elements we can use:
- w for width
- h for height
- min-w for min-width
- min-h for min-height
- max-w for max-width
- max-h for max-height

# Responsiveness

For responsiveness the main option 
you have at your disposal other
than standard em usage which
is default in tailwind, are media-queries

Considering tailwind is mobile first
to target mobile devices you use the 
unprefixed classes, if you want to change
them for larger screens, then you use
the prefixes.

## Media Query

Media queries in tailwind are based on
the size of the device the user is using,
they are practically pseudo-classes and
these are your options:
- sm, small devices
- md, medium devices
- lg, large devices
- xl, extra large devices
- 2xl, extra extra large devices

then you can have your tailwind css
class follow after the device query
and it would look like this:
```html
<div class="w-24 sm:w-16">
```
This means that the div is 6em wide
for other devices but its only 4 
em wide for small devices.

Prepending max- to these media
query pseudo-classes would make 
the properties apply for anything
lower than that device type.

Breakpoints are customizable when
using the theme variables:
```css
@theme {
    --breakpoint-xs: 30rem;
}
```
This allows for you to use
a new `xs` prefix.

You can also use arbitrary values
like `max-[600px]:bg-sky-360`
and also for min
