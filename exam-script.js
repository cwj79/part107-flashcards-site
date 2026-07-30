// ============================================================
//  QUESTION BANK (120 questions)
// ============================================================
const QUESTION_BANK = [
// ---- REGULATIONS ----
{
  category: "Regulations",
  question: "Under 14 CFR Part 107, what is the maximum groundspeed for a small UAS?",
  choices: ["87 knots (100 mph)", "100 knots (115 mph)", "55 knots (63 mph)"],
  answer: 0,
  explanation: "Part 107.51(b) limits sUAS groundspeed to no more than 87 knots (100 mph) during flight."
},
{
  category: "Regulations",
  question: "What is the minimum age to obtain a Remote Pilot Certificate under Part 107?",
  choices: ["14 years old", "16 years old", "18 years old"],
  answer: 1,
  explanation: "14 CFR 107.61(a) requires applicants to be at least 16 years of age."
},
{
  category: "Regulations",
  question: "What is the maximum altitude a remote pilot may operate a sUAS without a waiver?",
  choices: ["500 feet AGL", "400 feet AGL", "1,000 feet AGL"],
  answer: 1,
  explanation: "Part 107.51(b) limits operations to 400 feet AGL, unless within 400 feet of a structure."
},
{
  category: "Regulations",
  question: "How long after consuming alcohol must a remote pilot wait before operating a sUAS?",
  choices: ["4 hours", "8 hours", "12 hours"],
  answer: 1,
  explanation: "14 CFR 107.27 prohibits operation within 8 hours of consuming alcohol ('8 hours bottle to throttle')."
},
{
  category: "Regulations",
  question: "A remote pilot must report an accident to the FAA if property damage exceeds what dollar amount?",
  choices: ["$250", "$500", "$1,000"],
  answer: 1,
  explanation: "Part 107.9 requires reporting within 10 calendar days if property damage exceeds $500 (excluding the UA itself)."
},
{
  category: "Regulations",
  question: "Within how many calendar days must a remote pilot report an accident to the FAA?",
  choices: ["5 calendar days", "10 calendar days", "30 calendar days"],
  answer: 1,
  explanation: "14 CFR 107.9 requires an accident report to the FAA within 10 calendar days."
},
{
  category: "Regulations",
  question: "How often must a remote pilot complete recurrent training or testing to remain current?",
  choices: ["Every 12 calendar months", "Every 24 calendar months", "Every 36 calendar months"],
  answer: 1,
  explanation: "Part 107.65 requires a recurrent knowledge test or online training course every 24 calendar months."
},
{
  category: "Regulations",
  question: "Who has final authority over a sUAS flight and is directly responsible for its safety?",
  choices: ["The Visual Observer (VO)", "The Remote Pilot in Command (RPIC)", "The person physically manipulating the controls"],
  answer: 1,
  explanation: "The RPIC has final authority and is directly responsible for the safety of the operation, per 14 CFR 107.19."
},
{
  category: "Regulations",
  question: "Under Part 107, a sUAS must yield right-of-way to which of the following?",
  choices: ["All manned aircraft", "Only aircraft flying IFR", "Only aircraft on approach to land"],
  answer: 0,
  explanation: "14 CFR 107.37 requires the sUAS to yield right-of-way to ALL manned aircraft at all times."
},
{
  category: "Regulations",
  question: "A sUAS that weighs more than 0.55 lbs must be registered with the FAA before flight. Registration is valid for how long?",
  choices: ["1 year", "3 years", "5 years"],
  answer: 1,
  explanation: "FAA registration costs $5 and is valid for 3 years. Renewals must be completed on time."
},
{
  category: "Regulations",
  question: "During a Part 107 operation, where must the registration number be displayed?",
  choices: ["Inside a battery compartment", "On the exterior of the UA, legibly", "Only in the FAA DroneZone database"],
  answer: 1,
  explanation: "The registration number must be marked on the exterior of the UA and must be legible."
},
{
  category: "Regulations",
  question: "Part 107 allows a sUAS to exceed 400 ft AGL under which condition?",
  choices: ["When flying over water", "When within 400 feet of a structure", "When operating in Class G airspace"],
  answer: 1,
  explanation: "When operating within 400 feet of a structure, the sUAS may fly up to 400 feet above the structure (not AGL from the ground)."
},
{
  category: "Regulations",
  question: "Under Part 107, sUAS flight operations during civil twilight require what equipment?",
  choices: ["A strobe that is visible for 1 statute mile", "An anti-collision light visible for 3 statute miles", "An IR beacon detectable by night vision"],
  answer: 1,
  explanation: "107.29 permits operations during civil twilight with anti-collision lighting visible for 3 statute miles."
},
{
  category: "Regulations",
  question: "What blood alcohol concentration (BAC) limit applies to remote pilot operations under Part 107?",
  choices: ["0.08%", "0.04%", "0.02%"],
  answer: 1,
  explanation: "14 CFR 107.27 prohibits operation with a BAC of 0.04% or higher, which is half the standard DUI limit."
},
{
  category: "Regulations",
  question: "A person may manipulate the controls of a sUAS without holding a Remote Pilot Certificate if:",
  choices: ["They are over 18 years old", "A certificated Remote Pilot in Command is present and responsible", "The UAS weighs less than 0.55 lbs"],
  answer: 1,
  explanation: "Under 107.12, a non-certificated person may operate under the direct supervision of a certificated RPIC who is able to immediately take control."
},
{
  category: "Regulations",
  question: "To obtain a Part 107 Remote Pilot Certificate, a person must pass a knowledge test at:",
  choices: ["An FAA Flight Standards District Office (FSDO)", "An FAA-approved Knowledge Testing Center", "Any DMV office with TSA clearance"],
  answer: 1,
  explanation: "The Part 107 aeronautical knowledge test must be taken at an FAA-approved testing center."
},
{
  category: "Regulations",
  question: "Remote ID requires a sUAS to broadcast which of the following?",
  choices: ["The pilot's name and address", "The UA's location, altitude, velocity, and serial number", "Only the UA's GPS coordinates"],
  answer: 1,
  explanation: "Remote ID broadcasts include UA location/altitude, control station location, velocity, serial number, and time mark."
},
{
  category: "Regulations",
  question: "Under Part 107, the minimum flight visibility from the control station is:",
  choices: ["1 statute mile", "3 statute miles", "5 statute miles"],
  answer: 1,
  explanation: "14 CFR 107.51(c) requires a minimum flight visibility of 3 statute miles from the control station."
},
{
  category: "Regulations",
  question: "What is the minimum cloud clearance requirement for a sUAS under Part 107?",
  choices: ["1,000 ft below and 1 mile horizontally", "500 ft below and 2,000 ft horizontally", "500 ft above and 1,000 ft horizontally"],
  answer: 1,
  explanation: "14 CFR 107.51 requires the sUAS to remain at least 500 feet below clouds and 2,000 feet horizontally from clouds."
},
{
  category: "Regulations",
  question: "Which operation requires a Part 107 waiver?",
  choices: ["Flying at 350 ft AGL in Class G airspace during daylight", "Flying at night (outside civil twilight)", "Flying over a sparsely populated rural area"],
  answer: 1,
  explanation: "Nighttime operations (outside civil twilight) require an FAA waiver per 14 CFR 107.200."
},

// ---- AIRSPACE ----
{
  category: "Airspace",
  question: "What type of airspace is typically found above 18,000 feet MSL?",
  choices: ["Class E airspace", "Class A airspace", "Class B airspace"],
  answer: 1,
  explanation: "Class A airspace exists from 18,000 ft MSL to FL600. sUAS operations in Class A are not permitted."
},
{
  category: "Airspace",
  question: "On a sectional chart, what does a magenta dashed line indicate?",
  choices: ["Class B airspace boundary", "Class D airspace boundary", "Class E airspace starting at 700 ft AGL"],
  answer: 2,
  explanation: "A magenta dashed line on a sectional chart depicts Class E airspace that begins at 700 feet AGL."
},
{
  category: "Airspace",
  question: "LAANC stands for:",
  choices: ["Low Altitude Aeronautical Notification Clearance", "Low Altitude Authorization and Notification Capability", "Licensed Airspace Authorization for Non-Commercial"],
  answer: 1,
  explanation: "LAANC (Low Altitude Authorization and Notification Capability) provides near real-time sUAS authorizations in controlled airspace."
},
{
  category: "Airspace",
  question: "You want to fly a sUAS at 200 feet AGL within Class D airspace. What must you do first?",
  choices: ["No action needed — Class D is uncontrolled", "Obtain FAA authorization before flying", "Notify local law enforcement"],
  answer: 1,
  explanation: "Class D airspace is controlled airspace. Part 107.41 requires FAA authorization (via LAANC or DroneZone) before operating."
},
{
  category: "Airspace",
  question: "Which type of Special Use Airspace completely prohibits all aircraft from entering?",
  choices: ["Restricted Area", "Prohibited Area", "Military Operations Area (MOA)"],
  answer: 1,
  explanation: "Prohibited Areas (e.g., P-56 over Washington, D.C.) are off-limits to all aircraft at all times."
},
{
  category: "Airspace",
  question: "A Temporary Flight Restriction (TFR) is established over a wildfire area. A remote pilot may fly in this TFR:",
  choices: ["If below 400 ft AGL", "Only with specific FAA authorization", "If operating under Part 107"],
  answer: 1,
  explanation: "TFRs override standard Part 107 operations. You must have specific authorization to operate within a TFR regardless of altitude."
},
{
  category: "Airspace",
  question: "Class G airspace is best described as:",
  choices: ["Controlled airspace from the surface to 18,000 ft MSL", "Uncontrolled airspace where ATC has no authority", "Airspace surrounding Class B airports"],
  answer: 1,
  explanation: "Class G is uncontrolled airspace. ATC does not provide separation services. sUAS operations are generally permitted here within other Part 107 limits."
},
{
  category: "Airspace",
  question: "On a sectional chart, a blue dashed circle around an airport symbol typically indicates:",
  choices: ["Class E surface area", "Class D airspace", "Class C airspace"],
  answer: 1,
  explanation: "A blue dashed line depicts Class D airspace, which exists around airports with operating control towers."
},
{
  category: "Airspace",
  question: "Where can a remote pilot check for current NOTAMs before a flight?",
  choices: ["FAA DroneZone registration portal", "1800wxbrief.com or FAA NOTAM Search", "The airport manager's office"],
  answer: 1,
  explanation: "NOTAMs should be checked at 1800wxbrief.com, the FAA NOTAM Search system, or aviation apps before every flight."
},
{
  category: "Airspace",
  question: "The UAS Facility Map (UASFM) grid altitude at a location shows '0'. What does this mean?",
  choices: ["Unlimited altitude is approved via LAANC", "LAANC authorization is not available there — a manual DroneZone request is needed", "No sUAS flights are permitted there under any circumstances"],
  answer: 1,
  explanation: "A grid altitude of 0 on the UASFM means LAANC cannot issue an automatic authorization. The pilot must submit a manual authorization request through FAA DroneZone."
},
{
  category: "Airspace",
  question: "Class B airspace is typically found:",
  choices: ["Around military training bases", "Around the nation's busiest commercial airports", "Above remote mountainous terrain"],
  answer: 1,
  explanation: "Class B airspace surrounds the nation's busiest airports (e.g., LAX, ORD, JFK) and requires authorization for sUAS operations."
},
{
  category: "Airspace",
  question: "A runway is numbered '27'. This means the runway is oriented toward approximately:",
  choices: ["270 degrees (west)", "027 degrees (north-northeast)", "207 degrees (south-southwest)"],
  answer: 0,
  explanation: "Runway numbers represent the magnetic heading divided by 10. Runway 27 = 270° magnetic = west."
},
{
  category: "Airspace",
  question: "Which airspace requires ATC communication but is voluntary for VFR pilots (though sUAS pilots still need authorization)?",
  choices: ["Class B", "Class D", "Class C"],
  answer: 2,
  explanation: "Class C requires communication with ATC for manned aircraft. sUAS pilots need authorization to operate in Class C regardless."
},

// ---- WEATHER ----
{
  category: "Weather",
  question: "What weather condition is reported as 'BKN015' in a METAR?",
  choices: ["Broken clouds at 15,000 feet MSL", "Broken clouds at 1,500 feet AGL", "Sky clear below 1,500 feet"],
  answer: 1,
  explanation: "METAR cloud heights are reported in hundreds of feet AGL. BKN015 = Broken clouds at 1,500 feet AGL. Broken clouds represent a ceiling."
},
{
  category: "Weather",
  question: "What is density altitude?",
  choices: ["The altitude shown on the altimeter when set to 29.92", "Pressure altitude corrected for non-standard temperature", "The altitude above mean sea level of the terrain below"],
  answer: 1,
  explanation: "Density altitude is pressure altitude corrected for temperature deviations from standard. High density altitude means reduced air density and degraded aircraft performance."
},
{
  category: "Weather",
  question: "In a winds aloft forecast, a code of '9900' indicates:",
  choices: ["Winds exceeding 99 knots at that level", "Light and variable winds (less than 5 knots)", "Data unavailable for that altitude"],
  answer: 1,
  explanation: "The code '9900' in winds aloft forecasts means light and variable winds of less than 5 knots."
},
{
  category: "Weather",
  question: "Which type of fog is most likely to form on a calm, clear night over moist ground?",
  choices: ["Advection fog", "Radiation fog", "Upslope fog"],
  answer: 1,
  explanation: "Radiation fog forms when the ground cools via radiation on clear, calm nights, cooling the air above it to the dew point."
},
{
  category: "Weather",
  question: "The current METAR for your departure airport shows 'SCT030 BKN080'. What is the ceiling?",
  choices: ["3,000 feet AGL", "8,000 feet AGL", "There is no ceiling"],
  answer: 1,
  explanation: "A ceiling is the lowest broken or overcast layer. BKN080 = broken at 8,000 ft AGL. That is the ceiling."
},
{
  category: "Weather",
  question: "Winds aloft forecasts reference wind direction relative to:",
  choices: ["Magnetic North", "True North", "Grid North"],
  answer: 1,
  explanation: "Winds aloft (and surface winds in aviation forecasts) use True North. Surface winds in METARs use magnetic north."
},
{
  category: "Weather",
  question: "What three conditions are required for thunderstorm formation?",
  choices: ["Stable air, moisture, and cold fronts", "Lifting action, unstable air, and sufficient moisture", "Low pressure, strong winds, and high humidity"],
  answer: 1,
  explanation: "Thunderstorms require a lifting mechanism, atmospheric instability, and high moisture content."
},
{
  category: "Weather",
  question: "AIRMET Tango is issued for:",
  choices: ["Icing conditions", "Moderate turbulence and surface winds over 30 knots", "IFR conditions and mountain obscuration"],
  answer: 1,
  explanation: "AIRMET Tango covers moderate turbulence (non-convective), moderate icing on the surface, and sustained surface winds of 30 knots or more."
},
{
  category: "Weather",
  question: "When temperature and dew point are within 2–3°C of each other, a pilot should anticipate:",
  choices: ["Excellent visibility and smooth air", "Possible fog or low clouds", "Strong thunderstorm development"],
  answer: 1,
  explanation: "A small temperature-dew point spread indicates high relative humidity. When they converge, fog or low clouds are likely to form."
},
{
  category: "Weather",
  question: "How are cloud heights reported in winds aloft forecasts different from METARs?",
  choices: ["Both use AGL (above ground level)", "Winds aloft altitudes are MSL; METAR clouds are AGL", "Winds aloft altitudes are AGL; METAR clouds are MSL"],
  answer: 1,
  explanation: "In METARs, cloud heights are AGL. Winds aloft forecast altitudes are MSL. This distinction is critical when evaluating conditions."
},
{
  category: "Weather",
  question: "What is a microburst?",
  choices: ["A rapidly moving cold front", "A localized intense downdraft that spreads out at the surface, creating severe wind shear", "A sudden pressure drop near a large lake"],
  answer: 1,
  explanation: "A microburst is an intense column of air descending from a thunderstorm that hits the surface and spreads outward, creating dangerous wind shear. It typically lasts 5–15 minutes."
},
{
  category: "Weather",
  question: "Standard sea level pressure in the ISA (International Standard Atmosphere) is:",
  choices: ["30.00 in Hg", "29.92 in Hg", "29.50 in Hg"],
  answer: 1,
  explanation: "Standard sea level pressure is 29.92 in Hg (1013.25 millibars). This is the ISA standard used for pressure altitude calculations."
},
{
  category: "Weather",
  question: "Unstable air is associated with which weather condition?",
  choices: ["Layered stratus clouds and steady rain", "Cumulonimbus clouds and showery precipitation", "Smooth air and poor visibility at the surface"],
  answer: 1,
  explanation: "Unstable air produces cumuliform (vertical) clouds, turbulence, good visibility, and showery precipitation."
},
{
  category: "Weather",
  question: "A TAF uses the abbreviation 'TEMPO'. What does this indicate?",
  choices: ["A permanent change to the forecast conditions", "Conditions expected for less than half of the time period", "A 40% probability of the conditions occurring"],
  answer: 1,
  explanation: "TEMPO indicates temporarily expected conditions that will last less than half the specified period and for less than one hour at a time."
},
{
  category: "Weather",
  question: "Which AIRMET type addresses IFR conditions and mountain obscuration?",
  choices: ["AIRMET Tango", "AIRMET Sierra", "AIRMET Zulu"],
  answer: 1,
  explanation: "AIRMET Sierra covers IFR conditions (ceilings below 1,000 ft or visibility below 3 SM) and mountain obscuration."
},
{
  category: "Weather",
  question: "In which stage of a thunderstorm are both updrafts and downdrafts present, and conditions most severe?",
  choices: ["Cumulus stage", "Mature stage", "Dissipating stage"],
  answer: 1,
  explanation: "The mature stage of a thunderstorm is the most dangerous, featuring simultaneous updrafts and downdrafts, heavy rain, lightning, hail, and turbulence."
},
{
  category: "Weather",
  question: "What effect does high humidity have on aircraft performance?",
  choices: ["Increases lift due to added moisture", "Increases density altitude, reducing performance", "Has no measurable effect on sUAS"],
  answer: 1,
  explanation: "Humid air is less dense than dry air. High humidity increases density altitude, reducing thrust, lift, and overall performance."
},
{
  category: "Weather",
  question: "A METAR shows 'TSRA'. What does this mean?",
  choices: ["Temperature above standard range", "Thunderstorm with rain", "Time since rain accumulation"],
  answer: 1,
  explanation: "TSRA in a METAR is a combination of TS (thunderstorm) and RA (rain), meaning thunderstorm with rain is occurring."
},

// ---- LOADING & PERFORMANCE ----
{
  category: "Performance",
  question: "What is the effect of an aft (rearward) center of gravity on an aircraft?",
  choices: ["The aircraft becomes more stable and easier to control", "The aircraft becomes less stable and may become uncontrollable", "The aircraft requires more power to maintain altitude"],
  answer: 1,
  explanation: "An aft CG reduces longitudinal stability. If CG moves too far rearward, the aircraft can become uncontrollable."
},
{
  category: "Performance",
  question: "High density altitude has what effect on sUAS performance?",
  choices: ["Increases thrust and lift", "Reduces thrust, lift, and overall performance", "Has no effect on electric-powered sUAS"],
  answer: 1,
  explanation: "Higher density altitude means thinner air, reducing propeller and motor efficiency, lift, and battery performance."
},
{
  category: "Performance",
  question: "Which combination of conditions produces the highest density altitude?",
  choices: ["Low elevation, cold temperature, low humidity", "High elevation, high temperature, high humidity", "Sea level, hot temperature, low humidity"],
  answer: 1,
  explanation: "Density altitude increases with altitude, temperature, and humidity. All three at maximums produce the most degraded performance."
},

// ---- EMERGENCIES ----
{
  category: "Emergencies",
  question: "Before flight, a remote pilot should configure the Return-to-Home (RTH) altitude to:",
  choices: ["The current altitude of the aircraft", "A height that clears all obstacles in the area", "The maximum allowable altitude of 400 ft AGL"],
  answer: 1,
  explanation: "RTH altitude should be set high enough to clear all obstacles (trees, buildings, terrain) between the aircraft and the home point before the flight begins."
},
{
  category: "Emergencies",
  question: "A remote pilot loses all communication with the sUAS and cannot regain control. What is the primary concern?",
  choices: ["Completing the mission as planned", "Ensuring the sUAS does not pose an undue hazard to persons, property, or other aircraft", "Filing an immediate FAA report"],
  answer: 1,
  explanation: "Under 107.21, the remote pilot must take action to ensure the UA does not endanger anyone or anything in the event of a loss of control."
},
{
  category: "Emergencies",
  question: "If a sUAS unexpectedly lands in a tree and cannot be retrieved, when must the remote pilot report this to the FAA?",
  choices: ["Within 24 hours", "Only if property damage exceeds $500 or a person was injured", "Immediately via radio"],
  answer: 1,
  explanation: "Reporting is required only if the accident results in serious injury to a person or property damage exceeding $500. A stuck drone does not automatically require reporting."
},

// ---- CRM / CREW ----
{
  category: "CRM",
  question: "A Visual Observer (VO) assists the RPIC during a sUAS operation. Which statement is true?",
  choices: ["The VO can simultaneously serve as the RPIC if needed", "The VO cannot also serve as the RPIC during the same operation", "The VO must hold a Remote Pilot Certificate"],
  answer: 1,
  explanation: "The VO and RPIC are separate roles that cannot be performed by the same person simultaneously. The VO does not need a Remote Pilot Certificate."
},
{
  category: "CRM",
  question: "What is the primary responsibility of a Visual Observer during a sUAS operation?",
  choices: ["Operate the sUAS controls while the RPIC watches for traffic", "Help the RPIC maintain situational awareness of the UA and its environment", "File NOTAMs for the area of operation"],
  answer: 1,
  explanation: "The VO helps maintain awareness of the aircraft's position, traffic, weather, and hazards, communicating continuously with the RPIC."
},

// ---- RADIO ----
{
  category: "Radio",
  question: "What is the NATO phonetic alphabet word for the letter 'M'?",
  choices: ["Metro", "Mike", "Major"],
  answer: 1,
  explanation: "In the ICAO/NATO phonetic alphabet, M = Mike."
},
{
  category: "Radio",
  question: "ATIS stands for:",
  choices: ["Automated Terminal Information Service — a recorded broadcast of airport/weather info", "Air Traffic Information System", "Automated Traffic Identification Scanner"],
  answer: 0,
  explanation: "ATIS provides a continuous recorded broadcast of essential aeronautical information at controlled airports, including weather, runways in use, and NOTAMs."
},
{
  category: "Radio",
  question: "What is the aviation emergency frequency always monitored by ATC and many aircraft?",
  choices: ["122.8 MHz", "121.5 MHz", "123.45 MHz"],
  answer: 1,
  explanation: "121.5 MHz is the international aviation emergency (guard) frequency, continuously monitored by ATC and search-and-rescue services."
},
{
  category: "Radio",
  question: "UNICOM at a non-towered airport is used for:",
  choices: ["Filing IFR flight plans", "Air-to-ground advisory communications and information", "ATC radar separation services"],
  answer: 1,
  explanation: "UNICOM is a private radio service at non-towered airports providing advisories on wind, runway in use, and other operational information."
},
{
  category: "Radio",
  question: "When reading back a runway assignment of '27L', the correct phraseology is:",
  choices: ["'Two seven left'", "'Twenty-seven left'", "'Two-seven Lima'"],
  answer: 0,
  explanation: "Runway numbers are spoken as individual digits: '27L' = 'Two seven left.' Letters are spoken as their phonetic word in other contexts but runway designators L/C/R are said as words."
},

// ---- PHYSIOLOGY ----
{
  category: "Physiology",
  question: "Which IMSAFE checklist item addresses the impact of taking cold medicine before a flight?",
  choices: ["Illness", "Medication", "Fatigue"],
  answer: 1,
  explanation: "The 'M' in IMSAFE stands for Medication. Over-the-counter drugs can affect cognition and reaction time, making flight unsafe."
},
{
  category: "Physiology",
  question: "Which of the following best describes the 'invulnerability' hazardous attitude?",
  choices: ["'I must act now, there's no time to plan.'", "'It won't happen to me.'", "'I know better than the rules say.'"],
  answer: 1,
  explanation: "Invulnerability is the attitude that accidents happen to others, not oneself. The antidote is: 'It could happen to me.'"
},
{
  category: "Physiology",
  question: "Empty-field myopia affects pilots by causing the eyes to:",
  choices: ["Lose color perception at night", "Focus at about 3 feet in a featureless sky, missing traffic at distance", "Become hypersensitive to bright light"],
  answer: 1,
  explanation: "In a featureless sky with nothing to focus on, the eyes default to a resting focus of about 2–3 feet. This can cause a pilot to miss aircraft at distance."
},
{
  category: "Physiology",
  question: "A remote pilot experiences dizziness, tingling in the fingers, and confusion at a high-altitude ground location. These are most consistent with:",
  choices: ["Carbon monoxide poisoning", "Hypoxia (insufficient oxygen)", "Dehydration"],
  answer: 1,
  explanation: "Hypoxia symptoms include headache, dizziness, tingling, and impaired judgment. At high altitudes (above ~8,000 ft MSL), ground-based personnel can be affected."
},
{
  category: "Physiology",
  question: "The antidote for the 'anti-authority' hazardous attitude is:",
  choices: ["'Not so fast — think first.'", "'Follow the rules. They are there for a reason.'", "'I can make a difference.'"],
  answer: 1,
  explanation: "Anti-authority ('Don't tell me what to do') is countered by recognizing that rules exist for good reasons based on experience and data."
},
{
  category: "Physiology",
  question: "Stress that originates from anxiety, workload pressure, or personal problems is classified as:",
  choices: ["Physical stress", "Physiological stress", "Psychological stress"],
  answer: 2,
  explanation: "Psychological stress arises from mental or emotional pressures. It narrows attention and impairs decision-making."
},

// ---- ADM ----
{
  category: "ADM",
  question: "The PAVE checklist helps identify risks before a flight. What does the 'E' stand for?",
  choices: ["Environment", "External Pressures", "Emergency Procedures"],
  answer: 1,
  explanation: "In PAVE: P = Pilot, A = Aircraft, V = enVironment, E = External Pressures. The 'E' specifically addresses pressures that might cause a pilot to rush or take risks."
},
{
  category: "ADM",
  question: "The 3P model of aeronautical decision making stands for:",
  choices: ["Predict, Prepare, Perform", "Perceive, Process, Perform", "Plan, Prioritize, Proceed"],
  answer: 1,
  explanation: "The 3P model: Perceive hazards → Process the level of risk → Perform the best course of action."
},
{
  category: "ADM",
  question: "A client is pressuring a remote pilot to fly in deteriorating weather to finish a job. This pressure is most related to which PAVE element?",
  choices: ["Pilot", "Aircraft", "External Pressures"],
  answer: 2,
  explanation: "Client or schedule pressure is an 'External Pressure' — the 'E' in PAVE. Recognizing it helps the pilot resist making unsafe decisions."
},
{
  category: "ADM",
  question: "What hazardous attitude is associated with the thought 'Do something — anything — right now!'?",
  choices: ["Macho", "Impulsivity", "Resignation"],
  answer: 1,
  explanation: "Impulsivity drives people to act without thinking. The antidote is: 'Not so fast — think first.'"
},

// ---- AIRPORT OPS ----
{
  category: "Airport Ops",
  question: "What do chevron markings (yellow V-shapes) on a runway indicate?",
  choices: ["A touchdown zone for landing aircraft", "A blast pad or stopway — not usable for takeoff, landing, or taxi", "A holding area before runway entry"],
  answer: 1,
  explanation: "Chevron markings mark areas unusable for taxi, takeoff, or landing. These are blast pads or overrun areas."
},
{
  category: "Airport Ops",
  question: "At non-towered airports, the traffic pattern is flown in which direction unless otherwise indicated?",
  choices: ["Right turns", "Left turns", "Either direction based on wind"],
  answer: 1,
  explanation: "Standard traffic patterns use left turns. If right traffic is in use, it will be indicated by chart notation or airport signage."
},
{
  category: "Airport Ops",
  question: "A displaced threshold is marked by white arrows pointing toward the threshold. What may pilots do in the area before the displaced threshold?",
  choices: ["Land and take off from this area", "Take off from and taxi through, but not land", "No operations of any kind permitted"],
  answer: 1,
  explanation: "The area before a displaced threshold may be used for taxi and takeoff rollout but not for landing."
},
{
  category: "Airport Ops",
  question: "What does CTAF stand for, and where is it used?",
  choices: ["Common Terminal Advisory Frequency — used only at Class B airports", "Common Traffic Advisory Frequency — used at non-towered airports for self-announce", "Controlled Traffic and Approach Frequency — used for IFR approaches"],
  answer: 1,
  explanation: "CTAF is the Common Traffic Advisory Frequency used at non-towered airports. Pilots self-announce position and intentions on this frequency."
},

// ---- NAVIGATION ----
{
  category: "Navigation",
  question: "On a sectional chart, 1° of latitude equals how many nautical miles?",
  choices: ["30 nautical miles", "60 nautical miles", "100 nautical miles"],
  answer: 1,
  explanation: "One degree of latitude = 60 nautical miles. One minute of latitude = 1 nautical mile."
},
{
  category: "Navigation",
  question: "Magnetic variation is the difference between:",
  choices: ["True north and grid north", "True north and magnetic north", "Magnetic north and compass north"],
  answer: 1,
  explanation: "Magnetic variation (also called magnetic declination) is the angular difference between True North and Magnetic North at a given location."
},
{
  category: "Navigation",
  question: "To convert True course to Magnetic course when easterly variation is present, you should:",
  choices: ["Add the variation", "Subtract the variation", "Multiply by the variation factor"],
  answer: 1,
  explanation: "'East is least' — subtract easterly variation from True to get Magnetic. 'West is best' — add westerly variation."
},
{
  category: "Navigation",
  question: "Latitude lines run:",
  choices: ["North–south, parallel to the prime meridian", "East–west, parallel to the equator", "Diagonally based on magnetic declination"],
  answer: 1,
  explanation: "Lines of latitude (parallels) run east–west and measure distance north or south of the equator."
},
{
  category: "Navigation",
  question: "What scale does a standard VFR sectional aeronautical chart use?",
  choices: ["1:250,000", "1:500,000", "1:1,000,000"],
  answer: 1,
  explanation: "Sectional charts use a scale of 1:500,000, where 1 inch on the chart equals approximately 7 nautical miles."
},
{
  category: "Navigation",
  question: "Isogonic lines on a sectional chart represent:",
  choices: ["Areas of equal barometric pressure", "Lines of equal magnetic variation", "Terrain contour lines"],
  answer: 1,
  explanation: "Isogonic lines (dashed magenta lines labeled in degrees) connect points of equal magnetic variation across the chart."
},
{
  category: "Navigation",
  question: "When giving a geographic position, the convention is to state latitude first, then longitude. A location at 33°N latitude and 117°W longitude is located in:",
  choices: ["The Gulf of Mexico", "The southwestern United States (San Diego area)", "The northeastern United States"],
  answer: 1,
  explanation: "33°N, 117°W places the location in the southwestern US, near San Diego, California."
},

// ---- ADDITIONAL REGULATIONS ----
{
  category: "Regulations",
  question: "A remote pilot plans to operate from a moving vehicle. Under Part 107, this is only permitted:",
  choices: ["At any time with a Visual Observer present", "Over sparsely populated areas", "With a special waiver from the FAA"],
  answer: 1,
  explanation: "107.25 permits operations from a moving vehicle only in sparsely populated areas. A waiver is required for populated areas."
},
{
  category: "Regulations",
  question: "Which statement about operating a sUAS over people is correct under default Part 107 rules?",
  choices: ["It is permitted as long as the operator has a Visual Observer", "It is prohibited unless a waiver or specific category requirements are met", "It is permitted at altitudes below 50 ft AGL"],
  answer: 1,
  explanation: "Under default Part 107 rules, operating over moving vehicles and people not directly involved in the operation is prohibited. Category-based standards or waivers allow exceptions."
},
{
  category: "Regulations",
  question: "A sUAS weighing 48 lbs with a mounted camera is legal to operate under Part 107 because:",
  choices: ["Camera weight is not counted", "48 lbs plus payload is still below the 55 lb limit", "No weight limit applies when using a camera"],
  answer: 1,
  explanation: "Part 107 applies to UA with a takeoff weight of less than 55 lbs, including everything on board (payload, camera, batteries, etc.). 48 lbs is under the limit."
},
{
  category: "Regulations",
  question: "Which statement about waivers under Part 107 is correct?",
  choices: ["A waiver allows an operator to fly any way they choose", "A waiver authorizes specific operations that would otherwise violate Part 107, subject to stated conditions", "Waivers are not available for commercial operators"],
  answer: 1,
  explanation: "A Part 107 waiver grants permission to deviate from a specific regulation but only under the conditions and scope described in the waiver document."
},
{
  category: "Regulations",
  question: "What is the consequence for falsifying an FAA airman application or record?",
  choices: ["A written warning for the first offense", "Suspension or revocation of any certificate held, and possible criminal penalties", "A $50 civil penalty"],
  answer: 1,
  explanation: "Falsification of FAA records (14 CFR 61.59) can result in suspension/revocation of all certificates and civil or criminal penalties."
},

// ---- ADDITIONAL WEATHER ----
{
  category: "Weather",
  question: "What is the standard temperature lapse rate in the troposphere?",
  choices: ["1°C per 1,000 feet", "2°C per 1,000 feet", "3°C per 1,000 feet"],
  answer: 1,
  explanation: "The standard lapse rate is approximately 2°C (3.5°F) per 1,000 feet of altitude in the standard atmosphere."
},
{
  category: "Weather",
  question: "A SIGMET (significant meteorological information) is issued to warn pilots of:",
  choices: ["Moderate turbulence or icing over a small area", "Weather that is potentially hazardous to all aircraft — severe turbulence, icing, or volcanic ash", "Reduced visibility due to dust or smoke at the surface"],
  answer: 1,
  explanation: "SIGMETs warn of severe weather hazardous to all aircraft: severe or extreme turbulence, severe icing, volcanic ash, tropical cyclones."
},
{
  category: "Weather",
  question: "Advection fog differs from radiation fog in that advection fog is caused by:",
  choices: ["Ground cooling on clear nights", "Warm moist air moving over a cooler surface", "Air being forced upslope over terrain"],
  answer: 1,
  explanation: "Advection fog forms when warm, moist air moves horizontally over a cooler surface (common on the Pacific coast when warm ocean air moves over cold upwelling water)."
},
{
  category: "Weather",
  question: "A Convective SIGMET is automatically issued when a line of thunderstorms is at least:",
  choices: ["50 miles long with cells at least 10 miles wide", "60 miles long affecting at least 40% of its length", "100 miles long with cells at least 5 miles apart"],
  answer: 1,
  explanation: "Convective SIGMETs are issued for lines of thunderstorms at least 60 NM long with areas affecting at least 40% of the line's length."
},

// ---- ADDITIONAL PHYSIOLOGY & ADM ----
{
  category: "Physiology",
  question: "The 'resignation' hazardous attitude is characterized by which thought pattern?",
  choices: ["'I can handle any situation that comes up.'", "'What's the use — nothing I do matters.'", "'There's no time to think, I must act immediately.'"],
  answer: 1,
  explanation: "Resignation is the feeling of giving up or accepting a bad outcome. The antidote is: 'I am not helpless. I can make a difference.'"
},
{
  category: "Physiology",
  question: "Night vision relies primarily on which type of photoreceptors in the eye?",
  choices: ["Cones (central vision, color-sensitive)", "Rods (peripheral vision, sensitive at low light)", "Both equally in low light conditions"],
  answer: 1,
  explanation: "Rods are the photoreceptors responsible for night vision. They are located in the peripheral retina, which is why using off-center (averted) vision helps spot objects in low light."
},
{
  category: "ADM",
  question: "The 'macho' hazardous attitude is best countered by which antidote?",
  choices: ["'Follow the rules — they exist for a reason.'", "'Taking chances is foolish.'", "'Not so fast — think first.'"],
  answer: 1,
  explanation: "The macho attitude ('I can do this — no problem') is countered by recognizing that unnecessary risk-taking is not skill, it is foolishness."
},
{
  category: "ADM",
  question: "Which letter of the IMSAFE checklist addresses whether the pilot is emotionally ready to fly?",
  choices: ["S — Stress", "E — Emotion", "F — Fatigue"],
  answer: 1,
  explanation: "The 'E' in IMSAFE stands for Emotion. Strong emotional states (grief, anger, anxiety) significantly impair decision-making."
},

// ---- ADDITIONAL AIRSPACE ----
{
  category: "Airspace",
  question: "A Military Operations Area (MOA) on a sectional chart is shaded magenta. A Part 107 pilot wants to fly through it. What should they do?",
  choices: ["Proceed — MOAs do not restrict sUAS operations", "Check NOTAMs to determine if the MOA is active; proceed with caution if it is", "Obtain an FAA waiver before entering any MOA"],
  answer: 1,
  explanation: "MOAs are not prohibited for sUAS pilots, but active MOAs present a collision risk from high-speed military aircraft. Always check NOTAMs and exercise extreme caution."
},
{
  category: "Airspace",
  question: "A sUAS remote pilot is operating within Class G airspace at 300 ft AGL. Minimum visibility must be at least:",
  choices: ["1 statute mile", "3 statute miles", "5 statute miles"],
  answer: 1,
  explanation: "Regardless of airspace class, Part 107.51(c) requires a minimum flight visibility of 3 statute miles from the control station."
},
{
  category: "Airspace",
  question: "Which statement about Restricted Areas is correct?",
  choices: ["All aircraft are permanently prohibited from entering", "Flight is not wholly prohibited but is subject to restrictions; entry requires ATC authorization", "sUAS are always exempt from Restricted Area rules"],
  answer: 1,
  explanation: "Restricted Areas contain hazardous activities (weapons testing, military exercises). Nonparticipating aircraft may enter with ATC permission when the area is inactive."
},

// ---- ADDITIONAL AIRPORT / NAVIGATION ----
{
  category: "Airport Ops",
  question: "Taxiway centerlines and edge lines are marked in what color?",
  choices: ["White", "Yellow", "Blue"],
  answer: 1,
  explanation: "All taxiway markings (centerlines, edges, hold short markings) are yellow. Runway markings are white."
},
{
  category: "Navigation",
  question: "The agonic line is a special isogonic line where magnetic variation is:",
  choices: ["+15° east", "0° (no variation between true and magnetic north)", "-15° west"],
  answer: 1,
  explanation: "The agonic line is the isogonic line with 0° variation, meaning true north and magnetic north are aligned there. It runs roughly through the center of North America."
},
{
  category: "Navigation",
  question: "When reading a sectional chart to find a Class E airspace floor of 700 ft AGL, you would look for:",
  choices: ["A blue segmented line", "A magenta dashed line", "A solid blue line"],
  answer: 1,
  explanation: "A magenta dashed line on a sectional chart marks the transition area where Class E airspace begins at 700 ft AGL."
},

// ---- ADDITIONAL PERFORMANCE / CRM ----
{
  category: "Performance",
  question: "What is pressure altitude?",
  choices: ["Altitude shown on the altimeter when set to local altimeter setting", "The altitude indicated when the altimeter is set to 29.92 in Hg", "Height above ground level"],
  answer: 1,
  explanation: "Pressure altitude is the altitude shown when the altimeter subscale is set to 29.92 in Hg — the standard sea level pressure in the ISA."
},
{
  category: "CRM",
  question: "During a commercial photo shoot, a client asks the RPIC to fly directly over a crowd for a better shot. The RPIC should:",
  choices: ["Comply — client satisfaction is the priority", "Refuse — operating over people without a waiver or meeting category standards violates Part 107", "Comply only if the VO approves"],
  answer: 1,
  explanation: "The RPIC has final authority and responsibility. Operating over uninvolved people without meeting Part 107 category standards or a waiver is illegal and unsafe."
},
{
  category: "Regulations",
  question: "What does 14 CFR Part 107.23 prohibit?",
  choices: ["Operating a sUAS for hire without registration", "Careless or reckless operation of a sUAS that endangers life or property", "Exceeding 400 ft AGL without a waiver"],
  answer: 1,
  explanation: "107.23 prohibits careless or reckless operation. This regulation cannot be waived — unlike most other Part 107 limitations."
},
];

// ============================================================
//  EXAM STATE
// ============================================================
let examQuestions = [];
let userAnswers = [];
let currentIndex = 0;
let timerInterval = null;
let secondsRemaining = 7200; // 2 hours
let secondsUsed = 0;
let examStarted = false;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startExam() {
  // Pick 60 random questions
  const pool = shuffle([...QUESTION_BANK]);
  examQuestions = pool.slice(0, 60);
  userAnswers = Array(60).fill(null);
  currentIndex = 0;
  secondsRemaining = 7200;
  secondsUsed = 0;
  examStarted = true;

  buildPalette();
  renderQuestion(0);
  showScreen('exam-screen');
  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsRemaining--;
    secondsUsed++;
    updateTimerDisplay();
    if (secondsRemaining <= 0) {
      clearInterval(timerInterval);
      endExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const h = Math.floor(secondsRemaining / 3600);
  const m = Math.floor((secondsRemaining % 3600) / 60);
  const s = secondsRemaining % 60;
  const txt = `${h}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  document.getElementById('timer-text').textContent = txt;
  const box = document.getElementById('timer-display');
  box.className = 'timer-box';
  if (secondsRemaining <= 300) box.classList.add('danger');
  else if (secondsRemaining <= 900) box.classList.add('warning');
}

function buildPalette() {
  const grid = document.getElementById('palette-grid');
  grid.innerHTML = '';
  for (let i = 0; i < examQuestions.length; i++) {
    const btn = document.createElement('button');
    btn.className = 'palette-btn';
    btn.textContent = i + 1;
    btn.onclick = () => navigateToQ(i);
    btn.id = `pal-${i}`;
    grid.appendChild(btn);
  }
  document.getElementById('total-q-num').textContent = examQuestions.length;
  document.getElementById('progress-total').textContent = examQuestions.length;
}

function updatePalette() {
  for (let i = 0; i < examQuestions.length; i++) {
    const btn = document.getElementById(`pal-${i}`);
    btn.className = 'palette-btn';
    if (i === currentIndex) btn.classList.add('active-q');
    if (userAnswers[i] !== null) btn.classList.add('answered');
  }
}

function renderQuestion(idx) {
  const q = examQuestions[idx];
  currentIndex = idx;

  document.getElementById('q-num-badge').textContent = `Q${idx + 1}`;
  document.getElementById('q-cat-badge').textContent = q.category;
  document.getElementById('question-text').textContent = q.question;
  document.getElementById('current-q-num').textContent = idx + 1;

  // Figure
  const figEl = document.getElementById('question-figure');
  if (q.figure) {
    figEl.style.display = 'block';
    figEl.innerHTML = `<span class="fig-label">REFERENCE DATA</span>${q.figure}`;
  } else {
    figEl.style.display = 'none';
  }

  // Choices
  const container = document.getElementById('choices-container');
  container.innerHTML = '';
  const letters = ['A', 'B', 'C'];
  q.choices.forEach((choice, ci) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.innerHTML = `<span class="letter">${letters[ci]}</span><span>${choice}</span>`;
    btn.onclick = () => selectAnswer(ci);
    container.appendChild(btn);
  });

  // Restore state if already answered
  const feedback = document.getElementById('feedback-box');
  feedback.className = 'feedback-box';
  if (userAnswers[idx] !== null) {
    applyAnsweredState(idx, userAnswers[idx]);
  }

  // Nav buttons
  document.getElementById('btn-prev').disabled = idx === 0;
  const nextBtn = document.getElementById('btn-next');
  if (userAnswers[idx] !== null) {
    nextBtn.classList.add('show');
    nextBtn.textContent = idx === examQuestions.length - 1 ? 'Last Question' : 'Next →';
    if (idx === examQuestions.length - 1) nextBtn.disabled = true;
    else nextBtn.disabled = false;
  } else {
    nextBtn.classList.remove('show');
  }

  // Progress
  const answered = userAnswers.filter(a => a !== null).length;
  document.getElementById('progress-answered').textContent = answered;
  const pct = (answered / examQuestions.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';

  updatePalette();
}

function selectAnswer(choiceIdx) {
  if (userAnswers[currentIndex] !== null) return; // already answered
  userAnswers[currentIndex] = choiceIdx;
  applyAnsweredState(currentIndex, choiceIdx);

  const nextBtn = document.getElementById('btn-next');
  nextBtn.classList.add('show');
  if (currentIndex < examQuestions.length - 1) {
    nextBtn.textContent = 'Next →';
    nextBtn.disabled = false;
  } else {
    nextBtn.textContent = 'Last Question';
    nextBtn.disabled = true;
  }

  // Update progress
  const answered = userAnswers.filter(a => a !== null).length;
  document.getElementById('progress-answered').textContent = answered;
  const pct = (answered / examQuestions.length) * 100;
  document.getElementById('progress-bar').style.width = pct + '%';

  updatePalette();
}

function applyAnsweredState(idx, chosen) {
  const q = examQuestions[idx];
  const btns = document.querySelectorAll('.choice-btn');
  btns.forEach((btn, bi) => {
    btn.disabled = true;
    if (bi === q.answer) btn.classList.add('correct');
    else if (bi === chosen && chosen !== q.answer) btn.classList.add('incorrect');
  });

  const isCorrect = chosen === q.answer;
  const fb = document.getElementById('feedback-box');
  const title = document.getElementById('feedback-title');
  const text = document.getElementById('feedback-text');
  fb.className = 'feedback-box show ' + (isCorrect ? 'correct' : 'incorrect');
  title.textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
  text.textContent = q.explanation;
}

function navigateQ(delta) {
  const newIdx = currentIndex + delta;
  if (newIdx >= 0 && newIdx < examQuestions.length) renderQuestion(newIdx);
}

function navigateToQ(idx) {
  renderQuestion(idx);
}

function confirmEndExam() {
  const skipped = userAnswers.filter(a => a === null).length;
  if (skipped > 0) {
    if (!confirm(`You have ${skipped} unanswered question(s). End the exam and see your results?`)) return;
  }
  endExam();
}

function endExam() {
  clearInterval(timerInterval);
  buildResults();
  showScreen('results-screen');
}

function buildResults() {
  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  const catData = {};

  examQuestions.forEach((q, i) => {
    const ans = userAnswers[i];
    if (!catData[q.category]) catData[q.category] = { correct: 0, total: 0 };
    catData[q.category].total++;

    if (ans === null) {
      skipped++;
    } else if (ans === q.answer) {
      correct++;
      catData[q.category].correct++;
    } else {
      wrong++;
    }
  });

  const pct = Math.round((correct / examQuestions.length) * 100);
  const pass = pct >= 70;

  const header = document.getElementById('results-header');
  header.className = 'results-header ' + (pass ? 'pass' : 'fail');
  document.getElementById('pass-fail-text').textContent = pass ? 'PASS' : 'FAIL';
  document.getElementById('score-pct').textContent = pct + '%';
  document.getElementById('results-subtitle').textContent =
    pass ? `You answered ${correct} of ${examQuestions.length} questions correctly.`
         : `You answered ${correct} of ${examQuestions.length} questions correctly. 70% (42/60) required to pass.`;

  document.getElementById('stat-correct').textContent = correct;
  document.getElementById('stat-wrong').textContent = wrong;
  document.getElementById('stat-skipped').textContent = skipped;
  const mins = Math.floor(secondsUsed / 60);
  const secs = secondsUsed % 60;
  document.getElementById('stat-time').textContent = `${mins}:${String(secs).padStart(2,'0')}`;

  // Category breakdown
  const catContainer = document.getElementById('category-breakdown-rows');
  catContainer.innerHTML = '';
  Object.entries(catData).sort((a,b) => b[1].total - a[1].total).forEach(([cat, data]) => {
    const catPct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    const color = catPct >= 70 ? 'var(--green)' : catPct >= 50 ? '#b45309' : 'var(--accent)';
    catContainer.innerHTML += `
      <div class="cat-row">
        <div class="cat-name">${cat}</div>
        <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${catPct}%;background:${color}"></div></div>
        <div class="cat-score-text" style="color:${color}">${data.correct}/${data.total} (${catPct}%)</div>
      </div>`;
  });

  // Build review
  buildReviewList('all');
}

function buildReviewList(filter) {
  const container = document.getElementById('review-list');
  container.innerHTML = '';
  const letters = ['A', 'B', 'C'];

  examQuestions.forEach((q, i) => {
    const ans = userAnswers[i];
    const isCorrect = ans !== null && ans === q.answer;
    const isSkipped = ans === null;

    if (filter === 'incorrect' && (isCorrect || isSkipped)) return;
    if (filter === 'correct' && !isCorrect) return;

    let statusText = isCorrect ? 'CORRECT' : (isSkipped ? 'SKIPPED' : 'INCORRECT');
    let itemClass = isCorrect ? 'correct-item' : 'incorrect-item';

    let choicesHtml = q.choices.map((ch, ci) => {
      let cls = 'neutral';
      let icon = '';
      if (ci === q.answer) { cls = 'correct-ans'; icon = '✓ '; }
      else if (ci === ans && !isCorrect) { cls = 'your-wrong'; icon = '✗ '; }
      return `<div class="review-choice ${cls}">${icon}<strong>${letters[ci]}.</strong> ${ch}</div>`;
    }).join('');

    let yourAnswerNote = '';
    if (ans === null) yourAnswerNote = '<div style="font-size:0.8rem;color:#6b7280;margin-top:4px;">No answer selected.</div>';

    container.innerHTML += `
      <div class="review-item ${itemClass}">
        <div class="review-q-header">
          <span class="review-q-num">Q${i + 1}</span>
          <span class="review-status">${statusText}</span>
          <span class="review-q-cat">${q.category}</span>
        </div>
        <div class="review-question">${q.question}</div>
        <div class="review-choices-grid">${choicesHtml}</div>
        ${yourAnswerNote}
        <div class="review-explanation">${q.explanation}</div>
      </div>`;
  });

  if (container.innerHTML === '') {
    container.innerHTML = '<p style="color:var(--gray);font-size:0.9rem;padding:20px 0;">No questions in this category.</p>';
  }
}

function filterReview(type, el) {
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  buildReviewList(type);
}

function retakeExam() {
  startExam();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}
