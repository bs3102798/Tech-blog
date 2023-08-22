const post_idd = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
];

const updateTechPostFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#title-update-post").value.trim();
    const content = document
        .querySelector("#content-update-post")
        .value.trim();

    if (title && content) {
        const response = await fetch(`/api/posts/${post_idd}`, {
            method: "PUT",
            body: JSON.stringify({ title, content }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert("Failed to update a post.");
        }
    }
};

const deleteTechPostFormHandler = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/posts/${post_idd}`, {
        method: "DELETE",
    });

    if (response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert("Failed to delete a post.");
    }
};

const updateTechPostButton = document.querySelector("#update-post");

if (updateTechPostButton) {
    updateTechPostButton.addEventListener("click", updateTechPostFormHandler);
}

const deleteTechPostButton = document.querySelector("#delete-post");

if (deleteTechPostButton) {
    deleteTechPostButton.addEventListener("click", deleteTechPostFormHandler);
}