export const questions = [
  {
    "id": "U4-S1",
    "unit": 4,
    "marks": 2,
    "name": "Unicast, multicast, broadcast",
    "question": "Define Unicast, Multicast and Broadcast communication.",
    "concept": "The distinction is WHO should receive the packet: one host, a selected group, or every host in the broadcast domain.",
    "sim": "delivery",
    "steps": [
      "Unicast: A sends to B only. C and D are not intended recipients.",
      "Multicast: A sends to group members B and D. C is outside the group.",
      "Broadcast: A sends to every host on this local broadcast domain: B, C and D."
    ],
    "answer": "<ul><li><b>Unicast:</b> one sender communicates with one specific receiver, e.g. a client sending a request to a server.</li><li><b>Multicast:</b> one sender communicates with a selected group of receivers, e.g. an IP multicast video stream.</li><li><b>Broadcast:</b> one sender communicates with all hosts in a broadcast domain, e.g. an Ethernet ARP Request.</li></ul>",
    "trap": "Broadcast does not mean every device on the Internet. Routers normally do not forward local broadcasts.",
    "prompt": "A teacher speaks privately to one student, to a project group, and to the whole class. Name the three communication types.",
    "solution": "Private student = unicast; project group = multicast; whole local class = broadcast.",
    "checks": [
      "All three definitions",
      "One vs selected group vs all",
      "At least one suitable example"
    ],
    "quick": "Unicast = one; multicast = selected group; broadcast = all in the broadcast domain.",
    "refs": [
      791
    ]
  },
  {
    "id": "U4-S2",
    "unit": 4,
    "marks": 2,
    "name": "IPv4 TTL",
    "question": "Describe the purpose of the TTL field in an IPv4 datagram.",
    "concept": "A routing loop must not keep a packet alive forever. TTL is its remaining travel budget.",
    "sim": "ttl",
    "steps": [
      "Source sends a packet with TTL = 3.",
      "R1 forwards it with TTL = 2.",
      "R2 forwards it with TTL = 1.",
      "R3 decreases TTL to 0 and discards it. It does not forward the packet to the destination."
    ],
    "answer": "<p>The <b>Time To Live (TTL)</b> field is an 8-bit IPv4 header field that limits a datagram’s lifetime and prevents indefinite circulation in routing loops. Each forwarding router reduces TTL by at least one, normally one per hop. If it reaches zero, the router discards the packet and normally sends an ICMP Time Exceeded message to the source.</p>",
    "trap": "For this exam, describe hop-by-hop reduction. Do not say that a switch normally decreases IP TTL.",
    "prompt": "TTL starts at 2. After R1 and R2, what happens?",
    "solution": "R1 forwards with TTL 1. R2 reduces it to 0 and discards it, normally reporting ICMP Time Exceeded.",
    "checks": [
      "Prevents indefinite loops",
      "Reduced at routers",
      "Zero means discard"
    ],
    "quick": "TTL: 8 bits; reduced at each router; zero → discard; prevents loops.",
    "refs": [
      791
    ]
  },
  {
    "id": "U4-S3",
    "unit": 4,
    "marks": 2,
    "name": "Classful vs classless",
    "question": "Differentiate between classful and classless IPv4 addressing.",
    "concept": "Classful addressing fixes the network boundary by address class. Classless addressing tells you the boundary explicitly with /prefix.",
    "sim": "prefix",
    "steps": [
      "Classful: a Class C network has the default /24 boundary.",
      "Classless: 192.168.10.0/27 uses 27 network bits and 5 host bits.",
      "The explicit prefix permits appropriately sized blocks and route aggregation."
    ],
    "answer": "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Basis</th><th scope=\"col\">Classful</th><th scope=\"col\">Classless (CIDR)</th></tr></thead><tbody><tr><td>Network boundary</td><td>Fixed default A /8, B /16, C /24</td><td>Explicit /n prefix; variable length</td></tr><tr><td>Allocation</td><td>Fixed class-sized blocks; often wastes addresses</td><td>Blocks sized to requirement; more efficient</td></tr><tr><td>Example</td><td>Class C network 192.168.10.0, default /24</td><td>192.168.10.0/27</td></tr></tbody></table></div>",
    "trap": "A classless prefix is not inferred from the first octet. 192.x can be used with an explicitly assigned /27 or /22.",
    "prompt": "An address starts with 192 and has /27. How many bits identify the network?",
    "solution": "27 network bits and 5 host bits. The explicit prefix governs classless addressing.",
    "checks": [
      "Fixed vs variable boundary",
      "/8, /16, /24 vs /n",
      "Efficiency or example"
    ],
    "quick": "Classful: class fixes prefix. Classless: explicit /n fixes prefix.",
    "refs": [
      4632
    ]
  },
  {
    "id": "U4-S4",
    "unit": 4,
    "marks": 2,
    "name": "Purpose of CIDR",
    "question": "State the purpose of CIDR (Classless Inter-Domain Routing) in IPv4 addressing.",
    "concept": "CIDR lets us split a large block for efficient allocation and combine aligned blocks into one routing entry.",
    "sim": "cidr",
    "steps": [
      "Without aggregation: four /24 blocks need four routing entries.",
      "With aggregation: aligned 192.168.4.0/24 through 192.168.7.0/24 become 192.168.4.0/22.",
      "For allocation, explicit prefix lengths also let us choose a block size such as /27 rather than an entire /24."
    ],
    "answer": "<p><b>CIDR</b> uses an explicit prefix length, such as <code>192.168.10.0/27</code>, instead of fixed address classes. Its purposes are <b>efficient allocation of IPv4 addresses</b> using variable-sized blocks and <b>route aggregation</b>, which combines suitable contiguous networks into fewer routing-table entries.</p>",
    "trap": "Subnetting divides; aggregation combines. CIDR supports both ideas. CIDR is not a mechanism that converts IPv4 packets to IPv6.",
    "prompt": "Give the two major benefits of CIDR without expanding its acronym.",
    "solution": "More efficient address allocation and fewer routing-table entries through aggregation.",
    "checks": [
      "Explicit /prefix",
      "Efficient allocation",
      "Route aggregation"
    ],
    "quick": "CIDR = explicit prefix, efficient allocation, smaller routing tables.",
    "refs": [
      4632
    ]
  },
  {
    "id": "U4-L1",
    "unit": 4,
    "marks": 7,
    "name": "IPv4 address classes",
    "question": "Describe classful IPv4 addressing and classify the IPv4 address classes with their ranges and applications.",
    "concept": "IPv4 is 32 bits: four 8-bit octets. The leading bits historically choose the class, and A/B/C fix the network–host split.",
    "sim": "classes",
    "steps": [
      "Class A starts with 0: first octet 0–127; usable ordinary unicast class range is 1–126.",
      "Class B starts with 10: first octet 128–191; network /16, host 16 bits.",
      "Class C starts with 110: first octet 192–223; network /24, host 8 bits.",
      "Class D starts with 1110: 224–239, multicast; no ordinary network/host split.",
      "Class E starts with 1111: 240–255, reserved/experimental; no ordinary default host mask."
    ],
    "answer": "<p>Classful addressing is the historical scheme that divides the 32-bit IPv4 space into five classes according to leading bits. Classes A, B and C use fixed network and host boundaries.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Class / leading bits</th><th scope=\"col\">Address range</th><th scope=\"col\">Default mask / split</th><th scope=\"col\">Application</th></tr></thead><tbody><tr><td>A / 0</td><td>0.0.0.0–127.255.255.255<br>Ordinary class-A first octet: 1–126</td><td>255.0.0.0 (/8)<br>8 network + 24 host bits</td><td>Historically very large unicast networks</td></tr><tr><td>B / 10</td><td>128.0.0.0–191.255.255.255</td><td>255.255.0.0 (/16)<br>16 network + 16 host bits</td><td>Medium-sized unicast networks</td></tr><tr><td>C / 110</td><td>192.0.0.0–223.255.255.255</td><td>255.255.255.0 (/24)<br>24 network + 8 host bits</td><td>Small unicast networks</td></tr><tr><td>D / 1110</td><td>224.0.0.0–239.255.255.255</td><td>No default unicast subnet mask</td><td>Multicast groups</td></tr><tr><td>E / 1111</td><td>240.0.0.0–255.255.255.255</td><td>No default unicast subnet mask</td><td>Reserved/experimental</td></tr></tbody></table></div><ul><li>Ordinary usable hosts per A/B/C network are <code>2^h − 2</code>: A = 16,777,214; B = 65,534; C = 254. Network and directed-broadcast addresses are excluded.</li><li>Examples: 10.0.0.0 is historically A; 172.16.0.0 is B; 192.168.10.0 is C.</li><li>Special ranges exist: 0/8 has special uses, 127/8 is loopback, and 255.255.255.255 is limited broadcast. The class table does not imply every address is assignable to a host.</li><li>Fixed block sizes waste addresses, so modern routing uses classless prefixes.</li></ul>",
    "trap": "Write A’s complete bit-defined range as 0–127, with 1–126 for ordinary networks. Do not assign /24 masks or host counts to D/E.",
    "prompt": "Recreate the five-row class table from memory. Then explain why 127.0.0.1 is not an ordinary Class A host.",
    "solution": "A 0–127 (/8; ordinary 1–126), B 128–191 (/16), C 192–223 (/24), D 224–239 multicast, E 240–255 reserved. 127/8 is loopback.",
    "checks": [
      "32-bit address + class rule",
      "All five first-octet ranges",
      "A/B/C masks and splits",
      "Applications",
      "Special A ranges",
      "Classful limitation"
    ],
    "quick": "A 1–126 /8; B 128–191 /16; C 192–223 /24; D 224–239 multicast; E 240–255 reserved. 0 and 127 are special.",
    "refs": [
      791,
      4632,
      1112
    ]
  },
  {
    "id": "U4-L2",
    "unit": 4,
    "marks": 7,
    "name": "/24 into eight subnets",
    "question": "A network is assigned the address 192.168.10.0/24. Divide the network into 8 equal-sized subnets and determine the subnet mask, network addresses and broadcast addresses.",
    "concept": "Eight subnets need three identifying bits. Borrow them from the eight host bits; five bits remain for addresses inside each subnet.",
    "sim": "subnet",
    "steps": [
      "Need 8 subnets: 2³ = 8. Borrow 3 host bits, giving /24 + 3 = /27.",
      "Mask: last octet 11100000 = 224. New mask = 255.255.255.224.",
      "Each block has 2⁵ = 32 addresses. Step size = 32. First block is .0 through .31.",
      "Subnet 2: network .32, hosts .33–.62, broadcast .63.",
      "Subnet 3: network .64, hosts .65–.94, broadcast .95.",
      "Subnet 4: network .96, hosts .97–.126, broadcast .127.",
      "Subnet 5: network .128, hosts .129–.158, broadcast .159.",
      "Subnet 6: network .160, hosts .161–.190, broadcast .191.",
      "Subnet 7: network .192, hosts .193–.222, broadcast .223.",
      "Subnet 8: network .224, hosts .225–.254, broadcast .255."
    ],
    "answer": "<p><b>Why the calculation works:</b> /24 fixes the first 24 bits and leaves 8 variable bits, so there are 2⁸ = 256 addresses. Label eight subnets using 3-bit values 000 through 111. For each subnet, set the remaining host bits to all zeros for its network address and all ones for its broadcast address.</p><ol><li>Given network = <code>192.168.10.0/24</code>; original host bits = 8.</li><li>For 8 equal subnets, <code>2^s = 8 ⇒ s = 3</code> borrowed bits.</li><li>New prefix = <code>24 + 3 = /27</code>; remaining host bits = <code>32 − 27 = 5</code>.</li><li>Subnet mask = <code>11111111.11111111.11111111.11100000</code> = <b>255.255.255.224</b>. The last octet is <code>128 + 64 + 32 = 224</code>; the five host positions are zero in the mask.</li><li>Addresses per subnet = <code>2^5 = 32</code>; ordinary usable hosts = <code>32 − 2 = 30</code>; increment = <code>256 − 224 = 32</code>.</li></ol><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Subnet</th><th scope=\"col\">Network (/27)</th><th scope=\"col\">Usable hosts</th><th scope=\"col\">Broadcast</th></tr></thead><tbody><tr><td>1</td><td>192.168.10.0</td><td>192.168.10.1 – 30</td><td>192.168.10.31</td></tr><tr><td>2</td><td>192.168.10.32</td><td>192.168.10.33 – 62</td><td>192.168.10.63</td></tr><tr><td>3</td><td>192.168.10.64</td><td>192.168.10.65 – 94</td><td>192.168.10.95</td></tr><tr><td>4</td><td>192.168.10.96</td><td>192.168.10.97 – 126</td><td>192.168.10.127</td></tr><tr><td>5</td><td>192.168.10.128</td><td>192.168.10.129 – 158</td><td>192.168.10.159</td></tr><tr><td>6</td><td>192.168.10.160</td><td>192.168.10.161 – 190</td><td>192.168.10.191</td></tr><tr><td>7</td><td>192.168.10.192</td><td>192.168.10.193 – 222</td><td>192.168.10.223</td></tr><tr><td>8</td><td>192.168.10.224</td><td>192.168.10.225 – 254</td><td>192.168.10.255</td></tr></tbody></table></div><p>Check: <code>8 × 32 = 256</code> addresses, exactly covering the original /24 without overlaps or gaps. The network is the first address; broadcast is the last.</p>",
    "trap": "32 addresses means 30 ordinary usable hosts. Broadcast = next network − 1, so the first broadcast is .31, not .32. All eight subnets are usable; do not subtract two from the subnet count.",
    "prompt": "Without opening the answer, calculate subnet 6: network, broadcast, host range and mask.",
    "solution": "Subnet 6 (one-based): 192.168.10.160/27; broadcast .191; hosts .161–.190; mask 255.255.255.224.",
    "checks": [
      "Borrow 3 bits",
      "/27 and 255.255.255.224",
      "32-address increment",
      "All eight network addresses",
      "All eight broadcast addresses",
      "30 hosts + coverage check"
    ],
    "quick": "/24 → 8 subnets = /27, mask .224, step 32. Networks .0,.32,.64,.96,.128,.160,.192,.224; broadcasts each +31.",
    "refs": [
      4632
    ]
  },
  {
    "id": "U4-L3",
    "unit": 4,
    "marks": 7,
    "name": "Four /24s into a supernet",
    "question": "Four contiguous networks 192.168.4.0/24 to 192.168.7.0/24 are to be combined into a single network. Determine the supernet address and prefix length.",
    "concept": "To combine four blocks, release two network bits. Keep the bits all four networks share.",
    "sim": "supernet",
    "steps": [
      "Third octets: 4 = 00000100, 5 = 00000101, 6 = 00000110, 7 = 00000111.",
      "All four share the first six bits of the third octet: 000001. The last two vary.",
      "First 16 bits + 6 shared bits = /22. Clear the varying bits and all host bits: 192.168.4.0/22.",
      "The resulting block runs from 192.168.4.0 through 192.168.7.255."
    ],
    "answer": "<ol><li>There are four contiguous /24 blocks; <code>4 = 2^2</code>. Aggregating them reduces the prefix by 2: <code>24 − 2 = /22</code>.</li><li>Check their third octets in binary:</li></ol><pre>4 = 00000100\n5 = 00000101\n6 = 00000110\n7 = 00000111\n    └────┘ shared first 6 bits: 000001</pre><ol><li>The first two octets contribute 16 common bits; the third contributes 6. Prefix = <code>16 + 6 = 22</code>.</li><li>Mask = <code>255.255.252.0</code>: third octet <code>11111100 = 128+64+32+16+8+4 = 252</code>. A /22 advances by 4 in the third octet; 4 is a valid boundary.</li><li><b>Supernet = 192.168.4.0/22.</b> Coverage = <code>192.168.4.0–192.168.7.255</code>; broadcast = <code>192.168.7.255</code>.</li><li>Size = <code>2^(32−22) = 1024</code> addresses = <code>4 × 256</code>. The aggregation is exact.</li></ol>",
    "trap": "Contiguous is not sufficient: the block must be aligned. Four /24s starting at third octet 5 would not fit exactly in one /22.",
    "prompt": "What is the prefix and mask? Why is 192.168.5.0/22 not the network address?",
    "solution": "/22 and 255.255.252.0. /22 boundaries occur at third octets 0,4,8,…; 5 lies inside the block whose network is 192.168.4.0.",
    "checks": [
      "4 = 2²",
      "/22 derived",
      "Common-bit proof",
      "Alignment check",
      "Network and mask",
      "Coverage and size"
    ],
    "quick": "192.168.4.0/24…7.0/24 → 192.168.4.0/22; mask 255.255.252.0; broadcast 192.168.7.255.",
    "refs": [
      4632
    ]
  },
  {
    "id": "U4-L4",
    "unit": 4,
    "marks": 7,
    "name": "IPv4 → IPv6 transition",
    "question": "Compare the Dual Stack, Tunneling and Translation techniques used for transition from IPv4 to IPv6.",
    "concept": "Run both languages, carry one language inside the other, or translate between languages.",
    "sim": "transition",
    "steps": [
      "Dual stack: the host implements IPv4 and IPv6 and selects the version supported by its destination.",
      "Tunneling: an IPv6 packet is wrapped in an IPv4 packet while crossing an IPv4-only region; endpoints remove the wrapper.",
      "Translation: a translator changes headers/address representation so IPv6-only and IPv4-only endpoints can communicate. Example: NAT64."
    ],
    "answer": "<p>IPv4 and IPv6 packet formats are different. Transition mechanisms allow gradual migration while some hosts or networks still support only one version.</p><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Basis</th><th scope=\"col\">Dual stack</th><th scope=\"col\">Tunneling</th><th scope=\"col\">Translation</th></tr></thead><tbody><tr><td>Working</td><td>Run both IPv4 and IPv6 stacks</td><td>Encapsulate one IP version inside the other across an incompatible transit network</td><td>Convert between IPv4 and IPv6 packet/address representations</td></tr><tr><td>Endpoint requirement</td><td>Communicating peers use a common supported version</td><td>Tunnel endpoints support encapsulation/decapsulation; inner peers use the same inner version</td><td>Allows IPv6-only and IPv4-only endpoints to interoperate</td></tr><tr><td>Packet treatment</td><td>Native IPv4 or native IPv6; no tunnel wrapper needed</td><td>Example: outer IPv4 header + intact inner IPv6 packet</td><td>Headers are rewritten; transport checksums may need adjustment</td></tr><tr><td>Example</td><td>Host with both IPv4 and IPv6 addresses</td><td>Configured IPv6-over-IPv4 tunnel</td><td>NAT64, often used with DNS64</td></tr><tr><td>Benefit</td><td>Straightforward coexistence; native communication</td><td>Connects IPv6 islands over IPv4 infrastructure</td><td>Connects endpoints without a common IP version</td></tr><tr><td>Limitation</td><td>Maintain two stacks and both address/security configurations</td><td>Extra header overhead and MTU/configuration issues</td><td>Translation state or mapping complexity; some application protocols need special handling</td></tr></tbody></table></div><p>For two IPv6 networks separated by IPv4 transit, use tunneling; for an IPv6-only client contacting an IPv4-only server, translation is suitable. Dual stack is useful when both versions can be supported during migration.</p>",
    "trap": "Tunneling preserves an inner packet; translation changes its representation. A tunnel alone does not make an IPv6-only endpoint understand an IPv4-only endpoint.",
    "prompt": "An IPv6-only phone must talk to an IPv4-only server. Which method? Two IPv6 offices cross an IPv4 backbone: which method?",
    "solution": "Translation for the phone/server; IPv6-over-IPv4 tunneling for the offices.",
    "checks": [
      "Define all three",
      "Packet treatment",
      "Endpoint requirements",
      "One example each",
      "Benefits and limitations",
      "Appropriate scenario selection"
    ],
    "quick": "Dual stack = both stacks; tunnel = encapsulate; translation = convert (e.g. NAT64).",
    "refs": [
      4213,
      6146
    ]
  },
  {
    "id": "U4-L5",
    "unit": 4,
    "marks": 7,
    "name": "Distance vector vs link state",
    "question": "Compare Distance Vector and Link State Routing with respect to routing information, convergence, overhead, scalability and path calculation.",
    "concept": "Distance vector trusts neighbours’ distance reports. Link state builds a map from advertised links and calculates paths locally.",
    "sim": "routing",
    "steps": [
      "Example graph: A–B cost 1, B–C cost 2, A–C cost 7. A first knows directly connected costs.",
      "Distance vector: B tells A its distance to C is 2. A evaluates 1 + 2 = 3 and prefers B over its direct cost-7 route.",
      "Link state: routers flood link-state advertisements within the routing area, giving A the graph of links and costs.",
      "A runs Dijkstra on the graph: settle B at cost 1, then C at cost 3 via B. Both methods can choose A → B → C."
    ],
    "answer": "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Basis</th><th scope=\"col\">Distance vector (e.g. RIP)</th><th scope=\"col\">Link state (e.g. OSPF)</th></tr></thead><tbody><tr><td>Routing information</td><td>Destination, distance/metric and next hop; vectors exchanged with neighbours</td><td>Local links/costs advertised and flooded; topology database built within the area</td></tr><tr><td>Path calculation</td><td>Bellman–Ford principle: neighbour cost + neighbour’s advertised distance</td><td>Dijkstra shortest-path-first on the topology graph</td></tr><tr><td>Convergence</td><td>Typically slower in classic DV; loops and count-to-infinity can occur</td><td>Typically faster with triggered flooding and SPF recalculation</td></tr><tr><td>Overhead</td><td>Usually lower CPU/memory; periodic vector updates can consume bandwidth</td><td>More topology memory and CPU; flooding and initial database synchronization add overhead</td></tr><tr><td>Scalability</td><td>Classic RIP suits smaller networks; hop limit restricts scale</td><td>OSPF’s area hierarchy supports larger networks</td></tr><tr><td>Network knowledge</td><td>Neighbour-provided distance information; no full map</td><td>Link-state map for the area</td></tr></tbody></table></div><p><b>Example:</b> With A–B = 1, B–C = 2, A–C = 7, A chooses cost 3 via B. DV obtains this from B’s report; LS computes it from the graph.</p><p>DV relation: <code>D_A(C) = min_v [cost(A,v) + D_v(C)]</code>. Routing loops in classic DV can be reduced using split horizon, poison reverse and triggered updates. RIP treats metric 16 as unreachable.</p>",
    "trap": "Do not write “link state has no overhead” or “distance vector never scales.” These are typical comparisons of classic DV/RIP and LS/OSPF; protocol design matters.",
    "prompt": "If A→B costs 1 and B reports C at distance 2, what does A calculate? Name the DV and LS algorithms.",
    "solution": "A calculates 1 + 2 = 3 via B. DV uses Bellman–Ford principles; LS uses Dijkstra SPF.",
    "checks": [
      "Routing information",
      "Convergence",
      "CPU/memory and message overhead",
      "Scalability",
      "Bellman–Ford vs Dijkstra",
      "RIP/OSPF examples + path example"
    ],
    "quick": "DV: neighbours’ vectors, Bellman–Ford, classic slower convergence. LS: flooded links/map, Dijkstra, more CPU/memory, area-based scale.",
    "refs": [
      2453,
      2328
    ]
  },
  {
    "id": "U4-L6",
    "unit": 4,
    "marks": 7,
    "name": "ARP request and reply",
    "question": "Demonstrate the working of ARP using a suitable network example showing the ARP Request and ARP Reply process.",
    "concept": "IP identifies the destination at the network layer. Ethernet needs a next-hop MAC address to deliver the local frame. ARP supplies that mapping.",
    "sim": "arp",
    "steps": [
      "A = 192.168.10.10, MAC AA:AA:AA:AA:AA:AA. B = 192.168.10.20, MAC BB:BB:BB:BB:BB:BB. Both are on the same /24 LAN. A’s ARP cache has no entry for B.",
      "A broadcasts: “Who has 192.168.10.20? Tell 192.168.10.10.” Ethernet destination = FF:FF:FF:FF:FF:FF.",
      "Every host in this broadcast domain receives the request. B recognizes its own target IP. Other hosts do not normally reply.",
      "B replies by unicast to A: “192.168.10.20 is at BB:BB:BB:BB:BB:BB.”",
      "A caches B’s IP→MAC mapping and sends the Ethernet frame to B’s MAC, carrying the IP packet addressed to B."
    ],
    "answer": "<p><b>ARP (Address Resolution Protocol)</b> resolves an IPv4 next-hop address to a link-layer address, such as an Ethernet MAC, on the local link.</p><ol><li>Assume A (<code>192.168.10.10/24</code>, MAC <code>AA:AA:AA:AA:AA:AA</code>) wants to send to B (<code>192.168.10.20/24</code>, MAC <code>BB:BB:BB:BB:BB:BB</code>).</li><li>A checks its ARP cache. If no mapping exists, A sends an <b>ARP Request</b> in an Ethernet broadcast frame with destination <code>FF:FF:FF:FF:FF:FF</code>. The request carries A’s IP/MAC and B’s target IP.</li><li>Request meaning: <b>“Who has 192.168.10.20? Tell 192.168.10.10.”</b> All LAN hosts receive it; B recognizes its target IP.</li><li>B sends an <b>ARP Reply</b>, normally unicast to A’s MAC, containing the mapping <code>192.168.10.20 → BB:BB:BB:BB:BB:BB</code>.</li><li>A stores the mapping in its ARP cache and uses B’s MAC as the destination of the Ethernet frame. The IP destination stays 192.168.10.20.</li></ol><pre>A                       LAN                       B\n|-- ARP Request: Ethernet broadcast ------------->|\n|   Who has 192.168.10.20?                         |\n|<------------- ARP Reply: unicast to A -----------|\n|   192.168.10.20 is at BB:BB:BB:BB:BB:BB           |\n|-- Ethernet frame to B’s MAC; IP packet to B ---->|</pre><p>If the IP destination is on another subnet, A resolves the <b>default gateway’s MAC</b>, not the remote host’s MAC. ARP requests stay on the local broadcast domain.</p>",
    "trap": "ARP maps IP → MAC, not MAC → IP. The normal request is broadcast and reply is unicast. For off-subnet traffic, resolve the gateway.",
    "prompt": "A sends to 8.8.8.8 through gateway 192.168.10.1. Whose MAC does A resolve, and does the IP destination become the gateway?",
    "solution": "A resolves 192.168.10.1’s MAC. The IP destination remains 8.8.8.8; the local Ethernet destination is the gateway’s MAC.",
    "checks": [
      "ARP definition",
      "Specific same-LAN IP/MAC example",
      "Cache lookup",
      "Broadcast request + destination MAC",
      "Unicast reply",
      "Cache and data frame",
      "Off-subnet gateway distinction"
    ],
    "quick": "Cache miss → broadcast request → target’s unicast reply → cache → data. Remote subnet: ARP for gateway.",
    "refs": [
      826
    ]
  },
  {
    "id": "U5-S1",
    "unit": 5,
    "marks": 2,
    "name": "Transport service types",
    "question": "Explain connection-oriented and connectionless transport services.",
    "concept": "Connection-oriented service sets up shared endpoint state before normal data exchange. Connectionless service sends each message without a transport handshake.",
    "sim": "services",
    "steps": [
      "TCP: establish the connection, then exchange application data, then close.",
      "UDP: application datagrams can be sent directly without a UDP connection-establishment handshake."
    ],
    "answer": "<ul><li><b>Connection-oriented transport:</b> establishes and maintains a logical connection before data transfer. TCP provides reliable, ordered byte-stream delivery using acknowledgements and retransmissions.</li><li><b>Connectionless transport:</b> sends independent datagrams without prior transport connection establishment. UDP provides no guarantee of delivery, order or duplicate suppression.</li></ul>",
    "trap": "A TCP connection is logical; it does not reserve a dedicated physical wire. An application using UDP can still build its own session.",
    "prompt": "Which needs a transport handshake: TCP or UDP? Is TCP’s connection a physical circuit?",
    "solution": "TCP uses a transport handshake; UDP does not. TCP’s connection is logical endpoint state, not a dedicated physical circuit.",
    "checks": [
      "Establishment vs no establishment",
      "TCP and UDP examples",
      "Service behaviour"
    ],
    "quick": "TCP establishes logical state; UDP sends independent datagrams without a transport handshake.",
    "refs": [
      9293,
      768
    ]
  },
  {
    "id": "U5-S2",
    "unit": 5,
    "marks": 2,
    "name": "UDP services",
    "question": "Describe the services provided by UDP.",
    "concept": "IP gets a packet to a host; UDP’s ports help get its payload to the correct application process.",
    "sim": "udp-service",
    "steps": [
      "The sender application supplies a message and a destination port. UDP preserves this message boundary.",
      "UDP adds source/destination ports, length and checksum; IP carries the datagram to the destination host.",
      "The receiver uses the destination port to deliver the datagram to the right process. No UDP retransmission or ordering service is added."
    ],
    "answer": "<p>UDP provides <b>connectionless process-to-process datagram delivery</b>, <b>port-based multiplexing/demultiplexing</b>, and <b>checksum-based error detection</b>. Its 8-byte header gives low protocol overhead and it preserves message boundaries. UDP itself provides no reliability, ordering, retransmission, flow control or congestion control.</p>",
    "trap": "Error detection is not error recovery. In IPv4 the UDP checksum may be omitted; in IPv6 it is generally required. “Fast” is not a delivery guarantee.",
    "prompt": "If UDP has a checksum, why can a UDP message still disappear?",
    "solution": "A checksum detects corruption when used. UDP does not retransmit lost/corrupt datagrams or guarantee delivery.",
    "checks": [
      "Process-to-process ports",
      "Connectionless datagrams",
      "Checksum detection",
      "No reliability/order/control guarantees"
    ],
    "quick": "UDP: datagrams + ports + checksum detection; 8-byte header; no built-in recovery/order/flow/congestion control.",
    "refs": [
      768
    ]
  },
  {
    "id": "U5-S3",
    "unit": 5,
    "marks": 2,
    "name": "UDP datagram fields",
    "question": "List the fields of a UDP datagram.",
    "concept": "The UDP header has exactly four fields, each 16 bits. Two choose the processes, one gives size, one detects corruption.",
    "sim": "udp-header",
    "steps": [
      "Source port (16 bits): identifies the sending process.",
      "Destination port (16 bits): identifies the receiving process.",
      "Length (16 bits): UDP header plus UDP payload, in bytes; minimum 8.",
      "Checksum (16 bits): detects corruption when used. After the 8-byte header comes the payload."
    ],
    "answer": "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">UDP header field</th><th scope=\"col\">Size</th><th scope=\"col\">Purpose</th></tr></thead><tbody><tr><td>Source port</td><td>16 bits</td><td>Sending process port</td></tr><tr><td>Destination port</td><td>16 bits</td><td>Receiving process port</td></tr><tr><td>Length</td><td>16 bits</td><td>Total UDP header + payload length in bytes</td></tr><tr><td>Checksum</td><td>16 bits</td><td>Error detection</td></tr></tbody></table></div><p>Total UDP header size = <b>8 bytes</b>. The data/payload follows the header.</p>",
    "trap": "Do not add sequence number, acknowledgement number or window fields to UDP. Length includes the header.",
    "prompt": "A UDP payload is 20 bytes. What is the UDP Length field? Which four fields appear?",
    "solution": "28 bytes. Source port, destination port, length, checksum; 16 bits each.",
    "checks": [
      "Four correct field names",
      "16 bits each / 8-byte header",
      "Length includes header"
    ],
    "quick": "Source port | destination port | length | checksum. Each 16 bits; header 8 bytes.",
    "refs": [
      768
    ]
  },
  {
    "id": "U5-S4",
    "unit": 5,
    "marks": 2,
    "name": "Flow vs congestion control",
    "question": "Define TCP flow control and congestion control.",
    "concept": "There are two different bottlenecks: the receiver’s buffer and the network’s carrying capacity.",
    "sim": "controls",
    "steps": [
      "Flow control: a slow receiver advertises its available buffer space as rwnd. This protects the receiver.",
      "Congestion control: the sender adapts cwnd to network congestion signals. This protects the network.",
      "The usable flight limit is constrained by both: min(rwnd, cwnd). Already unacknowledged data uses part of that allowance."
    ],
    "answer": "<ul><li><b>TCP flow control</b> limits the sender according to the receiver’s available buffer space, communicated through the advertised receive window (<code>rwnd</code>), so the receiver is not overwhelmed.</li><li><b>TCP congestion control</b> adapts the sender’s sending rate/window to network conditions using the congestion window (<code>cwnd</code>), so the network is not overloaded.</li></ul>",
    "trap": "rwnd is about the receiver; cwnd is about the network. Sliding-window flow control is not the same as slow start.",
    "prompt": "A receiver has no buffer space but the network is empty. Which control stops the sender? What if the network is congested but the receiver is ready?",
    "solution": "Flow control stops it in the first case; congestion control restricts it in the second.",
    "checks": [
      "Receiver buffer / rwnd",
      "Network congestion / cwnd"
    ],
    "quick": "Flow → receiver/rwnd. Congestion → network/cwnd. Flight limit constrained by min(rwnd,cwnd).",
    "refs": [
      9293,
      5681
    ]
  },
  {
    "id": "U5-L1",
    "unit": 5,
    "marks": 7,
    "name": "TCP three-way handshake",
    "question": "Illustrate the TCP three-way handshake using a suitable sequence diagram and explain the role of SYN, SYN-ACK and ACK segments.",
    "concept": "Both endpoints choose their own initial sequence number. Each must acknowledge the other’s SYN before the connection is fully established.",
    "sim": "handshake",
    "steps": [
      "Client chooses x and sends SYN, Seq = x. Server is listening. The first ACK field is not valid because ACK is not set.",
      "Server chooses y and replies SYN + ACK, Seq = y, Ack = x + 1. It both announces y and acknowledges the client’s SYN.",
      "Client replies ACK, Seq = x + 1, Ack = y + 1. The server enters ESTABLISHED when it receives this final ACK."
    ],
    "answer": "<p>The TCP three-way handshake establishes a connection and synchronizes the independently chosen initial sequence numbers (ISNs) in both directions.</p><pre>Client (ISN = x)                       Server (ISN = y)\nCLOSED                                LISTEN\n  |---- SYN, Seq=x ---------------------->|\nSYN-SENT                              SYN-RECEIVED\n  |<--- SYN+ACK, Seq=y, Ack=x+1 ----------|\nESTABLISHED                           SYN-RECEIVED\n  |---- ACK, Seq=x+1, Ack=y+1 ----------->|\nESTABLISHED                           ESTABLISHED</pre><ol><li><b>SYN:</b> the client requests connection establishment and announces ISN x.</li><li><b>SYN-ACK:</b> the server announces ISN y and acknowledges the client’s SYN with <code>Ack = x + 1</code>.</li><li><b>ACK:</b> the client acknowledges the server’s SYN with <code>Ack = y + 1</code>, completing the handshake.</li><li>Each SYN consumes one sequence number. A pure ACK with no data consumes none. An acknowledgement number identifies the next sequence number expected.</li><li>The exchange confirms receipt of both sequence-number proposals and helps avoid confusion from old duplicate connection requests. Application data can then be transferred.</li></ol>",
    "trap": "SYN-ACK is one segment with both flags set. Do not add 1 to sequence space for a pure ACK. The server is not established until it receives the final ACK.",
    "prompt": "For ISNs x=40 and y=90, write all three segments and explain every +1.",
    "solution": "SYN Seq40; SYN+ACK Seq90 Ack41; ACK Seq41 Ack91. Each +1 acknowledges a SYN, which consumes one sequence number.",
    "checks": [
      "Two endpoint lifelines",
      "Three correct directions/flags",
      "x,y,x+1,y+1 labels",
      "Role of each segment",
      "SYN consumes one; pure ACK none",
      "Connection state/purpose"
    ],
    "quick": "SYN(x) → SYN+ACK(y, x+1) → ACK(x+1, y+1).",
    "refs": [
      9293
    ]
  },
  {
    "id": "U5-L2",
    "unit": 5,
    "marks": 7,
    "name": "Handshake: ISN 1000 / 5000",
    "question": "A TCP connection is established between two hosts having initial sequence numbers 1000 and 5000 respectively. Illustrate the three-way handshake by indicating the sequence and acknowledgement numbers.",
    "concept": "Apply the same handshake rule to two independent number lines. A’s first data byte is 1001; B’s is 5001.",
    "sim": "handshake-num",
    "steps": [
      "Host A → B: SYN; Seq = 1000. ACK flag is not set, so Ack is not meaningful.",
      "Host B → A: SYN + ACK; Seq = 5000; Ack = 1001.",
      "Host A → B: ACK; Seq = 1001; Ack = 5001. A pure ACK consumes no sequence number."
    ],
    "answer": "<p>Assume Host A (ISN 1000) initiates and Host B (ISN 5000) is listening. Assume no application data is carried during the handshake.</p><pre>Host A (ISN=1000)                      Host B (ISN=5000)\n  |---- SYN: Seq=1000 ------------------->|\n  |     Ack field not valid               |\n  |<--- SYN+ACK: Seq=5000, Ack=1001 -------|\n  |---- ACK: Seq=1001, Ack=5001 ---------->|\n  |         Connection established        |</pre><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Step</th><th scope=\"col\">Direction</th><th scope=\"col\">Flags</th><th scope=\"col\">Seq</th><th scope=\"col\">Ack</th></tr></thead><tbody><tr><td>1</td><td>A → B</td><td>SYN</td><td>1000</td><td>Not valid (ACK flag unset)</td></tr><tr><td>2</td><td>B → A</td><td>SYN + ACK</td><td>5000</td><td>1001</td></tr><tr><td>3</td><td>A → B</td><td>ACK</td><td>1001</td><td>5001</td></tr></tbody></table></div><ul><li>B acknowledges A’s SYN by expecting <code>1000 + 1 = 1001</code>.</li><li>A acknowledges B’s SYN by expecting <code>5000 + 1 = 5001</code>.</li><li>A’s next data starts at Seq 1001, and B’s next data starts at Seq 5001. The final pure ACK does not make A’s next data start at 1002.</li></ul>",
    "trap": "The first SYN’s ACK field is not meaningful. If you show Ack=0 as a classroom convention, explicitly say ACK flag is unset. 5001 is B’s next sequence number, not 1001.",
    "prompt": "After the final ACK, A sends 200 bytes beginning at Seq 1001. What cumulative Ack should B return?",
    "solution": "Ack 1201, assuming all 200 bytes (1001–1200) arrived in order. The handshake’s final pure ACK consumed no sequence space.",
    "checks": [
      "A initiates assumption",
      "SYN Seq1000",
      "SYN-ACK Seq5000 Ack1001",
      "ACK Seq1001 Ack5001",
      "Correct arrows/table",
      "SYN and pure-ACK explanation"
    ],
    "quick": "A→B SYN 1000; B→A SYN+ACK Seq5000 Ack1001; A→B ACK Seq1001 Ack5001.",
    "refs": [
      9293
    ]
  },
  {
    "id": "U5-L3",
    "unit": 5,
    "marks": 7,
    "name": "TCP vs UDP",
    "question": "Compare TCP and UDP with respect to connection establishment, reliability, sequencing, flow control and congestion control.",
    "concept": "TCP adds ordered, reliable stream delivery and control mechanisms. UDP carries independent messages with a small header; the application decides what extra behaviour it needs.",
    "sim": "tcp-udp",
    "steps": [
      "TCP establishes a connection; UDP has no transport handshake.",
      "If message 2 is lost, TCP detects missing byte sequence space and retransmits. UDP itself does not recover the lost datagram.",
      "TCP delivers an ordered byte stream. UDP preserves datagram boundaries but arrival order is not guaranteed."
    ],
    "answer": "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Basis</th><th scope=\"col\">TCP</th><th scope=\"col\">UDP</th></tr></thead><tbody><tr><td>Connection establishment</td><td>Connection-oriented; normally three-way handshake</td><td>Connectionless; no UDP handshake</td></tr><tr><td>Reliability</td><td>Acknowledgements, retransmissions and duplicate handling provide reliable delivery while the connection works; failure is reported</td><td>Best-effort datagrams; no delivery/duplicate-suppression guarantee</td></tr><tr><td>Sequencing</td><td>Byte sequence numbers; in-order byte-stream delivery</td><td>No built-in sequence numbering/order guarantee</td></tr><tr><td>Flow control</td><td>Receiver-advertised window prevents buffer overload</td><td>No built-in flow control</td></tr><tr><td>Congestion control</td><td>Sender uses congestion-control mechanisms and cwnd</td><td>No built-in congestion control; an application/protocol may implement it</td></tr><tr><td>Data unit / boundaries</td><td>Byte stream; application message boundaries not preserved</td><td>Datagrams; message boundaries preserved</td></tr><tr><td>Header overhead</td><td>Minimum 20-byte header, plus options</td><td>8-byte header</td></tr><tr><td>Examples</td><td>HTTP/1.1 or HTTP/2, SMTP, FTP, SSH</td><td>Many DNS queries, RTP media; QUIC uses UDP underneath</td></tr></tbody></table></div><p>Choose TCP when ordered reliable stream delivery is required. UDP can suit latency-sensitive or message-oriented applications that tolerate losses or implement their own recovery. UDP’s lower overhead does not guarantee that every application using it is faster.</p>",
    "trap": "Do not claim TCP can guarantee success after a permanent failure, or that every UDP-based application is unreliable. QUIC adds reliability/congestion control above UDP.",
    "prompt": "An application receives UDP datagram 3 before datagram 2. Does UDP reorder them? Does TCP preserve your original write() message boundaries?",
    "solution": "UDP does not reorder datagrams. TCP provides ordered bytes but does not preserve application message boundaries.",
    "checks": [
      "All five requested comparison axes",
      "Header and data-unit facts",
      "Examples",
      "Appropriate use-case rationale",
      "No absolute speed/success claim"
    ],
    "quick": "TCP: handshake, ACK/retransmit, ordered bytes, rwnd, cwnd. UDP: independent datagrams; none of those built in.",
    "refs": [
      9293,
      768
    ]
  },
  {
    "id": "U5-L4",
    "unit": 5,
    "marks": 7,
    "name": "TCP sliding-window flow control",
    "question": "Explain TCP flow control using the sliding-window mechanism and illustrate its operation with a suitable example.",
    "concept": "The receiver tells the sender how many bytes it can accept starting from the next expected byte. ACK moves the left edge; advertised space changes the right edge.",
    "sim": "window",
    "steps": [
      "Initial advertisement: ACK=1001, rwnd=400. Sender may send bytes 1001–1400. Assume congestion window is not limiting.",
      "Sender sends bytes 1001–1200 (200 bytes), now in flight. Unused allowance is 200 bytes.",
      "Receiver buffers those bytes, sends ACK=1201 and rwnd=200. Sender may now send 1201–1400. The right edge stays at 1401 (exclusive).",
      "Application reads 200 bytes. Receiver can advertise ACK=1201, rwnd=400. Sender may send 1201–1600; the right edge moves to 1601.",
      "Sender sends bytes 1201–1600 (400 bytes), now in flight.",
      "Receiver buffers them and advertises ACK=1601, rwnd=0. Sender pauses new data because the receiver buffer is full.",
      "Application reads the buffer. Receiver advertises ACK=1601, rwnd=400. Sender can resume with bytes 1601–2000."
    ],
    "answer": "<p>TCP flow control prevents a fast sender from overflowing a receiver’s buffer. The receiver advertises available space using the <b>receive window (rwnd)</b> in TCP’s Window field. TCP’s window is measured in <b>bytes</b>.</p><ol><li>The sender tracks sent-but-unacknowledged bytes and can transmit additional data within the permitted window without waiting after every segment.</li><li>A cumulative <code>ACK=k</code> means all in-order bytes before k have been received and k is the next byte expected.</li><li>In this simplified flow-control example, the allowed interval is <code>[ACK, ACK + rwnd)</code>. New-send allowance is also reduced by bytes already in flight.</li><li>As ACKs arrive, the left edge moves forward. If the application consumes buffered data, the receiver can advertise more space and the right edge can advance.</li><li>With <code>rwnd=0</code>, the sender pauses new data and uses TCP’s persist/zero-window probing mechanism to discover when the window opens.</li></ol><div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Event</th><th scope=\"col\">Advertisement / action</th><th scope=\"col\">Allowed next-byte interval</th></tr></thead><tbody><tr><td>Initial empty 400-byte buffer</td><td>ACK=1001, rwnd=400</td><td>1001–1400</td></tr><tr><td>Send first 200 bytes</td><td>Seq=1001, length=200</td><td>200 bytes in flight; 200 still available</td></tr><tr><td>Receiver buffers 200 bytes</td><td>ACK=1201, rwnd=200</td><td>1201–1400</td></tr><tr><td>Application reads those 200 bytes</td><td>ACK=1201, rwnd=400</td><td>1201–1600</td></tr><tr><td>Send next 400; receiver buffers all</td><td>ACK=1601, rwnd=0</td><td>No new data allowed</td></tr><tr><td>Application reads 400 bytes</td><td>ACK=1601, rwnd=400</td><td>1601–2000</td></tr></tbody></table></div><p>Thus the window slides as bytes are acknowledged and capacity becomes available. In real TCP, the outstanding-data limit is also constrained by <code>min(rwnd, cwnd)</code>; here cwnd is assumed large enough.</p>",
    "trap": "ACK 1201 means “next byte expected is 1201,” not “I received byte 1201.” TCP windows count bytes, not a fixed number of packets. ACK does not automatically imply the application has consumed the data.",
    "prompt": "ACK=3001, rwnd=500 and 200 bytes already in flight from Seq3001. Which bytes are permitted, and how many more bytes can be sent?",
    "solution": "Permitted interval is 3001–3500. With 200 bytes already in flight, 300 additional bytes may be sent, assuming cwnd is not tighter.",
    "checks": [
      "Purpose and rwnd",
      "Byte-based cumulative ACK",
      "Sliding left/right edges",
      "Correct numeric example",
      "In-flight allowance",
      "Zero window and reopening",
      "Distinguish cwnd"
    ],
    "quick": "ACK=k means next byte k. Window [k,k+rwnd). Subtract in-flight bytes; rwnd=0 pauses new data.",
    "refs": [
      9293
    ]
  },
  {
    "id": "U6-S1",
    "unit": 6,
    "marks": 2,
    "name": "API definition and application",
    "question": "Define an Application Programming Interface (API) and state one application of API.",
    "concept": "An API is the agreed way software asks other software to do something. In networking, the sockets API connects application code to transport services.",
    "sim": "api",
    "steps": [
      "An application wants to send data, so it calls a documented interface such as send() on a connected socket.",
      "The operating system’s networking implementation handles transport and IP processing under that interface.",
      "The peer application receives data through its own socket API. The API is a software interface; TCP is the protocol used across the network."
    ],
    "answer": "<p>An <b>Application Programming Interface (API)</b> is a defined set of operations, rules and data formats through which one software component uses another component’s services. For example, the <b>socket API</b> lets a network application create a socket and use operations such as <code>connect()</code>, <code>send()</code> and <code>recv()</code> to communicate through TCP.</p>",
    "trap": "An API is not the same thing as a wire protocol, and it does not have to be a web API. A socket API is especially suitable for a CN answer.",
    "prompt": "Is send() a protocol packet or an API call? What is one use of the socket API?",
    "solution": "send() is an API call. A client application can use a socket API to connect to a server and exchange data using TCP.",
    "checks": [
      "Software interface definition",
      "One concrete application/example"
    ],
    "quick": "API = defined software interface. Socket API lets applications connect, send and receive.",
    "refs": []
  },
  {
    "id": "U6-S2",
    "unit": 6,
    "marks": 2,
    "name": "DNS name → IP",
    "question": "Explain the role of DNS in converting a domain name into an IP address.",
    "concept": "Humans use names; IP routing uses addresses. DNS retrieves the address records associated with a name.",
    "sim": "dns",
    "steps": [
      "Application asks a recursive DNS resolver for a name, e.g. www.example.com. The resolver first checks its cache.",
      "On a cache miss, the resolver asks a root server, which points it to the .com top-level-domain servers.",
      "A .com server refers it to the domain’s authoritative name server.",
      "The authoritative server returns the requested record: A for IPv4, or AAAA for IPv6.",
      "The resolver returns the result to the client and can cache it for the record’s TTL. The application uses the IP address to connect."
    ],
    "answer": "<p><b>DNS (Domain Name System)</b> is a distributed, hierarchical naming system that resolves domain names to IP addresses. A client queries a DNS resolver, which uses cached data or queries the DNS hierarchy to obtain an <b>A record for IPv4</b> or an <b>AAAA record for IPv6</b>, then returns the address so the client can contact the host.</p>",
    "trap": "DNS returns an address; it does not fetch the web page. DNS-record TTL is cache lifetime, distinct from IPv4-packet TTL. A name can have multiple addresses.",
    "prompt": "Which record gives an IPv6 address? After DNS returns an address, has the browser received the website content?",
    "solution": "AAAA provides an IPv6 address. No: the browser must establish communication with the web server and request content.",
    "checks": [
      "Name-to-address role",
      "Resolver/hierarchy or cache",
      "A and AAAA"
    ],
    "quick": "DNS: domain name → address records; A = IPv4, AAAA = IPv6; resolver returns result.",
    "refs": [
      1034,
      3596
    ]
  },
  {
    "id": "U6-S3",
    "unit": 6,
    "marks": 2,
    "name": "SMTP vs FTP applications",
    "question": "Differentiate between SMTP and FTP based on their applications.",
    "concept": "SMTP moves mail between sending and receiving mail systems. FTP moves files between a client and a file server.",
    "sim": "mail-file",
    "steps": [
      "SMTP: outgoing mail is submitted and/or relayed to a mail server. It is used for sending and transferring email.",
      "FTP: a client uploads or downloads files and can manage remote files/directories."
    ],
    "answer": "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Protocol</th><th scope=\"col\">Application</th></tr></thead><tbody><tr><td>SMTP — Simple Mail Transfer Protocol</td><td>Sending and relaying email between clients/mail servers and between mail servers</td></tr><tr><td>FTP — File Transfer Protocol</td><td>Uploading/downloading files and managing files/directories on a remote server</td></tr></tbody></table></div><p>SMTP handles mail delivery; FTP handles file transfer. Both commonly operate over TCP.</p>",
    "trap": "SMTP does not retrieve inbox messages for the user; IMAP or POP3 normally does that. SFTP is a separate SSH-based file-transfer protocol.",
    "prompt": "Choose the protocol for sending email and for uploading a file to an FTP server.",
    "solution": "SMTP sends/relays email; FTP uploads/downloads files.",
    "checks": [
      "SMTP application",
      "FTP application",
      "Clear contrast"
    ],
    "quick": "SMTP sends/relays mail. FTP transfers/manages files.",
    "refs": [
      5321,
      959
    ]
  },
  {
    "id": "U6-S4",
    "unit": 6,
    "marks": 2,
    "name": "FTP control / data connections",
    "question": "Explain the functions of control and data connections and common FTP operations.",
    "concept": "FTP keeps the conversation about a transfer separate from the bytes being transferred.",
    "sim": "ftp",
    "steps": [
      "Control connection to server port 21: client sends login and commands; server returns reply codes.",
      "Client sends RETR report.pdf over the control connection.",
      "A separate data connection carries report.pdf bytes; a directory LIST also travels over a data connection.",
      "The data connection normally closes after transfer. The control connection remains for the next command until QUIT."
    ],
    "answer": "<p>FTP uses two separate TCP connections:</p><ul><li><b>Control connection:</b> connects to server TCP port 21; carries commands and replies and normally stays open throughout the session.</li><li><b>Data connection:</b> carries file contents and directory listings; normally opened separately for a transfer and closed afterward. In active FTP, the server normally connects from TCP port 20; in passive FTP, the client connects to a server-advertised port.</li><li><b>Common operations:</b> login (USER/PASS), download (RETR), upload (STOR), list (LIST), change directory (CWD), delete (DELE), and quit (QUIT).</li></ul>",
    "trap": "Port 21 is control. Port 20 is associated with classic active-mode server data connections; passive mode uses a server-advertised port. A LIST result travels on data, not control.",
    "prompt": "Which connection carries RETR, and which carries the downloaded file? Give two more FTP operations.",
    "solution": "RETR command uses control; file bytes use data. Other operations include STOR upload, LIST directory listing, CWD change directory, DELE delete.",
    "checks": [
      "Control commands/replies, port21",
      "Separate data for files/listings",
      "Common operations"
    ],
    "quick": "FTP control TCP21: commands/replies. Data: files/listings. RETR/STOR/LIST/CWD/DELE/QUIT.",
    "refs": [
      959
    ]
  },
  {
    "id": "U6-S5",
    "unit": 6,
    "marks": 2,
    "name": "TELNET vs SSH",
    "question": "Compare TELNET and SSH with respect to working, port numbers, security features and applications.",
    "concept": "Both allow remote terminal use. Their crucial difference is whether someone watching the network can read or tamper with the session.",
    "sim": "ssh",
    "steps": [
      "TELNET: remote terminal over TCP port 23. In ordinary TELNET, passwords and commands travel in plaintext.",
      "SSH: secure remote session, normally over TCP port 22; traffic is encrypted and integrity-protected, with server/user authentication."
    ],
    "answer": "<div class=\"table-wrap\"><table><thead><tr><th scope=\"col\">Basis</th><th scope=\"col\">TELNET</th><th scope=\"col\">SSH</th></tr></thead><tbody><tr><td>Working</td><td>Remote terminal using a network virtual terminal</td><td>Secure remote session over an encrypted channel</td></tr><tr><td>Default port</td><td>TCP 23</td><td>TCP 22</td></tr><tr><td>Security</td><td>Ordinary TELNET lacks encryption; credentials/data can be read</td><td>Encryption, integrity protection and server/user authentication</td></tr><tr><td>Application</td><td>Legacy remote login, mainly trusted/test environments</td><td>Secure remote administration, tunneling and SSH-based file transfer</td></tr></tbody></table></div>",
    "trap": "For a 2-mark answer, use a compact four-row table to cover the axes explicitly requested. Ordinary TELNET’s login prompt does not encrypt credentials.",
    "prompt": "Name both default ports. What happens to a password observed on the network in ordinary TELNET versus SSH?",
    "solution": "TELNET TCP23, SSH TCP22. TELNET exposes plaintext; SSH protects the password/session inside an encrypted authenticated channel.",
    "checks": [
      "Working",
      "TCP23 vs TCP22",
      "Security contrast",
      "Applications"
    ],
    "quick": "TELNET TCP23 plaintext. SSH TCP22 encrypted, authenticated, integrity-protected remote access.",
    "refs": [
      854,
      4251
    ]
  },
  {
    "id": "U6-S6",
    "unit": 6,
    "marks": 2,
    "name": "Why prefer SSH?",
    "question": "Justify the preference of SSH over TELNET for secure remote access.",
    "concept": "Secure remote access needs secrecy, confidence in the peer, and protection against altered commands.",
    "sim": "ssh",
    "steps": [
      "TELNET’s plaintext can expose a user’s password and commands to a network observer.",
      "SSH encrypts session data, authenticates the server/user, and detects alteration using integrity protection."
    ],
    "answer": "<p>SSH is preferred because it provides <b>encryption</b> to protect passwords and session data, <b>authentication</b> of the server and user, and <b>integrity protection</b> against modification. Ordinary TELNET sends data in plaintext, exposing credentials and commands to interception. SSH therefore provides safer remote login and administration over untrusted networks.</p>",
    "trap": "“SSH uses port 22” is a fact, not the security justification. Explain confidentiality, authentication and integrity.",
    "prompt": "Give three security reasons to prefer SSH. Which one prevents an observer from reading your session?",
    "solution": "Confidentiality through encryption, authentication, and integrity protection. Encryption prevents reading session contents.",
    "checks": [
      "Encryption/confidentiality",
      "Authentication",
      "Integrity",
      "TELNET plaintext risk"
    ],
    "quick": "SSH protects confidentiality, authentication and integrity; TELNET exposes plaintext.",
    "refs": [
      4251
    ]
  },
  {
    "id": "U6-S7",
    "unit": 6,
    "marks": 2,
    "name": "FTP connections (repeat)",
    "question": "Give the functions of control and data connections and common FTP operations.",
    "concept": "This is the same examinable content as U6-S4. Prepare one strong answer and recognise either wording.",
    "sim": "ftp",
    "steps": [
      "Control TCP21: commands and replies, retained across transfers.",
      "Data connection: file bytes and directory listings, separate from control.",
      "Operations: RETR download, STOR upload, LIST listing, CWD change directory, DELE delete and QUIT."
    ],
    "answer": "<p>FTP uses two separate TCP connections:</p><ul><li><b>Control connection:</b> connects to server TCP port 21; carries commands and replies and normally stays open throughout the session.</li><li><b>Data connection:</b> carries file contents and directory listings; normally opened separately for a transfer and closed afterward. In active FTP, the server normally connects from TCP port 20; in passive FTP, the client connects to a server-advertised port.</li><li><b>Common operations:</b> login (USER/PASS), download (RETR), upload (STOR), list (LIST), change directory (CWD), delete (DELE), and quit (QUIT).</li></ul>",
    "trap": "This repeated entry is not an extra topic. Do not spend another full study block on it; use it as a second recall check.",
    "prompt": "Close U6-S4 and reproduce its answer from this alternate wording.",
    "solution": "Control carries commands/replies on server TCP21. Data carries files/listings; active mode normally uses server TCP20, passive a negotiated server port. Operations include RETR, STOR, LIST, CWD, DELE and QUIT.",
    "checks": [
      "Control function",
      "Data function",
      "Operations",
      "Recognise duplicated question"
    ],
    "quick": "Same answer as U6-S4: control = commands, data = contents; include operations.",
    "refs": [
      959
    ]
  }
];

export const sources = {
  "768": [
    "UDP",
    "https://www.rfc-editor.org/rfc/rfc768"
  ],
  "791": [
    "IPv4 / addressing / TTL",
    "https://www.rfc-editor.org/rfc/rfc791"
  ],
  "826": [
    "ARP",
    "https://www.rfc-editor.org/rfc/rfc826"
  ],
  "854": [
    "TELNET",
    "https://www.rfc-editor.org/rfc/rfc854"
  ],
  "959": [
    "FTP",
    "https://www.rfc-editor.org/rfc/rfc959"
  ],
  "1034": [
    "DNS",
    "https://www.rfc-editor.org/rfc/rfc1034"
  ],
  "1112": [
    "IP multicast / class D",
    "https://www.rfc-editor.org/rfc/rfc1112"
  ],
  "2328": [
    "OSPF / link state",
    "https://www.rfc-editor.org/rfc/rfc2328"
  ],
  "2453": [
    "RIP / distance vector",
    "https://www.rfc-editor.org/rfc/rfc2453"
  ],
  "3596": [
    "DNS IPv6 records",
    "https://www.rfc-editor.org/rfc/rfc3596"
  ],
  "4213": [
    "Dual stack and tunneling",
    "https://www.rfc-editor.org/rfc/rfc4213"
  ],
  "4251": [
    "SSH",
    "https://datatracker.ietf.org/doc/html/rfc4251"
  ],
  "4632": [
    "CIDR and aggregation",
    "https://www.rfc-editor.org/rfc/rfc4632"
  ],
  "5321": [
    "SMTP",
    "https://datatracker.ietf.org/doc/html/rfc5321"
  ],
  "5681": [
    "TCP congestion control",
    "https://www.rfc-editor.org/rfc/rfc5681"
  ],
  "6146": [
    "NAT64 translation",
    "https://www.rfc-editor.org/rfc/rfc6146"
  ],
  "9293": [
    "TCP",
    "https://www.rfc-editor.org/rfc/rfc9293"
  ]
};

export const studyRoute = [
  [
    "00–10",
    "10 min",
    "Build the minimum foundation",
    [
      "U4-S1",
      "U4-S2",
      "U5-S1",
      "U6-S1"
    ],
    "Learn host vs application, IP vs MAC, network prefix vs host bits, and connection vs datagram. Use the four linked questions as anchors.",
    "Exit test: explain where IP, MAC, ports and API fit in one delivery."
  ],
  [
    "10–50",
    "40 min",
    "Addressing and both numericals",
    [
      "U4-S3",
      "U4-S4",
      "U4-L1",
      "U4-L2",
      "U4-L3"
    ],
    "Spend about 5 min on classful/CIDR, 8 min on the class table, 15 min on the eight subnets, and 12 min on supernetting. Draw the bits; calculate before revealing.",
    "Exit test: reconstruct the complete /27 table and prove the /22 boundary without notes."
  ],
  [
    "50–75",
    "25 min",
    "ARP, routing and IPv6 transition",
    [
      "U4-L6",
      "U4-L5",
      "U4-L4"
    ],
    "ARP 9 min, DV vs LS 8 min, transition comparison 8 min. Draw ARP arrows and explain which MAC is resolved for a remote subnet. Write the two comparison tables.",
    "Exit test: broadcast/unicast arrows + all five requested routing axes + all three transition mechanisms."
  ],
  [
    "75–80",
    "5 min",
    "Break",
    [],
    "Leave the screen. Drink water and rest your eyes.",
    "Do not use the break to scroll through more notes."
  ],
  [
    "80–125",
    "45 min",
    "Transport: turn the diagrams into answers",
    [
      "U5-L1",
      "U5-L2",
      "U5-L4",
      "U5-L3",
      "U5-S2",
      "U5-S3",
      "U5-S4"
    ],
    "Handshake 12 min, sliding window 13 min, TCP/UDP comparison 8 min, remaining short questions 12 min. Predict sequence numbers and ACK values before stepping.",
    "Exit test: correct 1000/5000 handshake, window example in bytes, UDP fields and rwnd/cwnd distinction."
  ],
  [
    "125–145",
    "20 min",
    "Application-layer short answers",
    [
      "U6-S1",
      "U6-S2",
      "U6-S3",
      "U6-S4",
      "U6-S5",
      "U6-S6",
      "U6-S7"
    ],
    "About 3 min per distinct answer. Learn DNS’s purpose, SMTP vs FTP, FTP’s two connections, and TELNET vs SSH. U6-S7 repeats S4; use it as recall.",
    "Exit test: give each answer in a few precise lines or a compact table."
  ],
  [
    "145–150",
    "5 min",
    "Break",
    [],
    "Step away again.",
    "Return ready to write from memory."
  ],
  [
    "150–185",
    "35 min",
    "Closed-book question-to-answer practice",
    [
      "U4-S1",
      "U4-S2",
      "U4-S3",
      "U4-S4",
      "U4-L1",
      "U4-L2",
      "U4-L3",
      "U4-L4",
      "U4-L5",
      "U4-L6",
      "U5-S1",
      "U5-S2",
      "U5-S3",
      "U5-S4",
      "U5-L1",
      "U5-L2",
      "U5-L3",
      "U5-L4",
      "U6-S1",
      "U6-S2",
      "U6-S3",
      "U6-S4",
      "U6-S5",
      "U6-S6",
      "U6-S7"
    ],
    "For 15 min, recall the 14 distinct short answers (about a minute each). For 20 min, produce answer skeletons for the 10 long questions (about two minutes each): requested headings, diagram/table/formula and key values.",
    "Do not reread first. Mark an answer ready only after reproducing it; record every error."
  ],
  [
    "185–215",
    "30 min",
    "Write a 20-mark practice paper",
    [],
    "Use Practice Set A. Write on paper: two 7-mark questions at about 10 min each and three 2-mark questions at about 2 min each; reserve 4 min to check.",
    "This is a practice composition, not a claim about your actual paper pattern."
  ],
  [
    "215–240",
    "25 min",
    "Repair errors, then retrieve again",
    [],
    "Use 15 min to compare your script with the answer checklists and fix only missed points. Use 10 min to redo those points from memory; finish with subnet boundaries, ACK numbers, routing algorithms, UDP fields and default ports.",
    "Final test: reproduce the corrected answer without a hint. If time remains, use Practice Set B as an extra check."
  ]
];