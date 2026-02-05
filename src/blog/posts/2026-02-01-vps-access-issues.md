---
title: "Unexpected Kex Protocol Error from My Virtual Private Server"
desc: "In the past week, I was suddenly unable to access my main VPS via SSH, but fortunately it was resolved."
date: 2026-02-01T22:25:28+0800
topics: [virtual private server]
---
In the past week, I had a [successful presentation during my school's roadshow](2026-02-01-42-malaysia-roadshow.md). Unfortunately, not everything went smoothly for me in this week.

On Monday, I encountered a major unexpected setback when I woke up in the morning: I was unable to access my main virtual private server (VPS), which hosts all my websites, including this one, and most of the self-hosted apps I use, and I could not visit any of my websites. On the other hand, I can still access my other VPS, which I rented from a different provider.

When I tried to access my main VPS with secure shell (SSH), I kept getting an `kex_protocol_error: type 30 seq 1` error. The issue persisted even after I tried to rebuild my VPS,

I opened a support ticket to Deluxhost, the provider of my main VPS, as I suspected the possibility of the issue being caused by the provider misconfigured my server, with a detailed technical log produced by my attempt to access the server with SSH with the `ssh -vvv` command, which would hopefully help them figure out the cause.

Fortunately, I have always kept local backup copies of my VPS data, and I took notes about how I set up my VPS, so I temporarily worked around the issue of my websites and self-hosted apps not being accessible by moving them to my other VPS, which I rented form Chunkserve.

Initially, DeluxHost responded by saying they could connect, and suggesting I tried a different SSH client, so I tried to access my VPS with PuTTY, but still no luck, as I got an `Received unexpected packet when expecting ECDH reply, type 30 (SSH2_MSG_KEX_HYBRID_INIT)` error pop-up instead. I reported this back to Deluxhost.

Finally, on Thursday, when Deluxhost responded again by asking me to try to clean my host keys, I could finally access my Deluxhost VPS again, though Deluxhost support did not reveal what they did to solve my issues.

Since my main VPS is back to normal, I moved my websites and most of the self-hosted apps I use back to the server.


