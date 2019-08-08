export const homeLink: Link = {
  label: "Home",
  path: "/",
  icon: "home",
  children: []
};

/**
 * IMPORTANT: This works assuming that sitemap only contains one level of child links.
 * Meaning, the child links themselves cannot contain further children.
 *
 */
export const sitemap: Link[] = [
  {
    label: "Contacts",
    path: null,
    icon: "address-book",
    children: [
      {
        label: "Contacts",
        path: "contacts/",
        icon: "address-book",
        children: []
      },
      {
        label: "Add Contact",
        path: "contacts/add-edit",
        icon: "plus",
        children: []
      }
    ]
  },
  {
    label: "Programs",
    path: null,
    icon: "address-book",
    children: [
      {
        label: "Programs",
        path: "programs",
        icon: "address-book",
        children: []
      },
      {
        label: "Add Program",
        path: "programs/add-edit",
        icon: "plus",
        children: []
      }
    ]
  },
  {
    label: "Bulk Upload",
    path: "bulk-upload",
    icon: "upload",
    children: []
  },
  {
    label: "Dropdown Menu",
    path: null,
    icon: "server",
    children: [
      {
        label: "Dummy Menu 1",
        path: "dummy1",
        icon: "list",
        children: []
      },
      {
        label: "Dummy Menu 2",
        path: "dummy1",
        icon: "list",
        children: []
      },
      {
        label: "Dummy Menu 3",
        path: "dummy1",
        icon: "list",
        children: []
      }
    ]
  }
];

export class Link {
  label = "";
  path = "";
  icon = "";
  children: Link[] = [];
}
