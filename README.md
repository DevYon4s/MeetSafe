# MeetSafe

## Project Title

MeetSafe

## Contributors

- Yonas Belew
- Hana Melese
- Meaza Mulatu

---

## 📄 Project Synopsis

### 🧩 Problem Statement

With the rise of social media, many teenagers and young adults are experiencing increasing levels of loneliness, disconnection from the real world, and challenges in making new friends. While existing social media services provide a platform for communication, they rarely foster meaningful, in-person relationships. Additionally, concerns about safety, catfishing, and fake identities make it difficult for individuals to meet new people confidently.

### 💡 Planned Solution

We are building a web app that enables verified users to create or join in-person hangouts at open public spaces. Users register and verify their identity using their national ID, which securely provides verified details like name, gender, picture, and date of birth.

Verified users can:

- ✅ Create hangout events based on shared interests
- ✅ Join or request to join meetups
- ✅ Approve or reject participants
- ✅ Meet safely knowing others are verified
- ✅ Chat with participants before the meetup
- ✅ Rate and review participants after the meetup

This ensures participants are real people, within a specific age group, and are easily accountable.

---

## 🎯 Expected Outcomes

- ✅ **Addressing a Growing Mental Health Crisis**  
  According to a 2023 U.S. Surgeon General’s Advisory, loneliness has become a public health epidemic. It increases the risk of:

  - Heart disease by 29%
  - Stroke by 32%
  - Depression, anxiety, and suicide, particularly among youth

  In Ethiopia and globally, the rise of screen-first communication has left many young people isolated, even when surrounded by digital “friends.”

  This tool directly addresses this by:

  - Facilitating real-world social interactions
  - Encouraging meaningful, face-to-face conversation
  - Helping users form small communities based on shared passions

- ✅ **Making Real-World Connections Safe and Accessible**  
  The fear of meeting strangers—due to scams, catfishing, or predatory behavior—prevents many from socializing outside their existing circle.

  Using Fayda, this platform ensures:

  - Every user is verified by age, name, and gender
  - Minors are protected from being contacted by older adults
  - If misconduct occurs, legal authorities can be provided with the verified identity of the person involved

- ✅ **Improving Mental Health Through In-Person Socialization**  
  Face-to-face interaction:

  - Increases oxytocin, the “bonding” hormone
  - Reduces cortisol, the stress hormone
  - Has been proven to boost mood, self-esteem, and emotional resilience

  By enabling users to easily organize or join small gatherings in public spaces, this tool encourages:

  - Regular, healthy social interaction
  - A decrease in screen time
  - An increase in outdoor activity, which is also linked to better mental health

- ✅ **Building Interest-Based Small Communities**  
  Our tool will help people meet others with similar interests, fostering genuine connections through shared interests. Whether you are learning Geʽez, playing traditional instruments, looking for a partner to practice a new indigenous language, or seeking advice from people who are where you want to be, our tool will help you do these things safely and easily.

---

## 🔐 Fayda’s Role

Fayda is critical to ensuring the safety, authenticity, and accountability of users:

- ✅ Prevents minors from being contacted by much older users
- ✅ Ensures users are who they say they are (no catfishing)
- ✅ Enables the platform to hand over verified identity data to law enforcement in case of misconduct, harassment, or other issues

---

## 🛠️ Tech Stack

### Frontend

- React (with axios & dotenv)
- Tailwind CSS (for styling)
- headlessui (for accessible UI components) [headlessui.com](https://headlessui.com/)


### Backend

- Express (Node.js) + axios
- PostgreSQL (user/event storage)
- Prisma ORM (database interaction)
- OIDC with signed JWT client assertion (Auth Method)
