const API_BASE_URL = "https://app-bharathi-school-fgc7eag8ahb0a8dm.canadacentral-01.azurewebsites.net/api";

// Announcement 
async function getAnnouncements(schoolId) {
  try {
    const res = await fetch(`${API_BASE_URL}/AnnouncementBanner/school/${schoolId}`);
    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

// Hero Banner 
async function getHeroBanners(schoolId) {
  try {
    const res = await fetch(`${API_BASE_URL}/HeroBanner/school/${schoolId}`);
    const result = await res.json();
    return result.data; 
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

//events

async function getEvents() {
  try {
    const response = await fetch(`${API_BASE_URL}/Gallery/events/school?schoolId=1`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return { success: false, data: [] };
  }
}
async function getEventImages(schoolId, eventId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/Gallery/schools/${schoolId}/events/${eventId}/images`
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return { success: false, data: [] };
  }
}

//latest events
async function getNotifications(schoolId) {
  try {
    const res = await fetch(`${API_BASE_URL}/Notification/by-school/${schoolId}`);
    const result = await res.json();
    return result.data; 
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

//about us
async function getAboutUs(schoolId) {
  try {
    const res = await fetch(`${API_BASE_URL}/AboutUs/by-school/${schoolId}`);
    const result = await res.json();
    console.log(result.data);
    return result.data; 
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}

// POST Enquiry 
function submitEnquiry(payload) {
  return fetch("https://localhost:7103/api/Enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(res => {
    return res.text().then(data => ({
      ok: res.ok,
      data: data
    }));
  })
  .catch(err => ({
    ok: false,
    error: err.message
  }));
}

//books
async function getBooks(schoolId) {
  try {
    const response = await fetch(`${API_BASE_URL}/Book/by-school/${schoolId}`);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}

// Blogs
async function getBlogs(schoolId, page = 1, pageSize = 4) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/CreateBlog/by-school/${schoolId}?page=${page}&pageSize=${pageSize}`
    );

    if (!res.ok) throw new Error("Failed to fetch blogs");

    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return { data: [] };
  }
}

const API_BASE = "https://localhost:7103/api";
//  gallery images
async function getGalleryImages(schoolId) {
  try {
    const response = await fetch(`${API_BASE}/Gallery/schools/${schoolId}/images`);

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    const result = await response.json();

    if (result.success && result.data) {
      return result.data;
    } else {
      return [];
    }

  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}